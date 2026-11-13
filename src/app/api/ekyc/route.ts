const MOBILE_RE = /^[6-9]\d{9}$/;

const UTM_DEFAULTS = {
    utm_source: "source",
    utm_medium: "medium",
    utm_campaign: "campaign",
    utm_term: "term",
    utm_content: "content",
    utm_code: "code",
    utm_agency: "agency",
};

/** Keep only plain string query params so arbitrary JSON can't be forwarded upstream. */
function sanitizeParams(input: unknown): Record<string, string> {
    if (!input || typeof input !== "object") return {};
    const out: Record<string, string> = {};
    for (const [k, v] of Object.entries(input as Record<string, unknown>)) {
        if (typeof v === "string" && k.length <= 64) out[k] = v.slice(0, 256);
    }
    return out;
}

export async function POST(req: Request) {
    const api_url = process.env.PRIMARY_URL;
    const token = process.env.AUTH_TOKEN;
    const signupUrl = process.env.SIGNUP_URL;

    if (!api_url || !token || !signupUrl) {
        console.error("[ekyc] Missing PRIMARY_URL / AUTH_TOKEN / SIGNUP_URL");
        return Response.json({ error: "Service is not configured. Please try again later." }, { status: 500 });
    }

    let payload: { mobile?: unknown; dynamicParams?: unknown };
    try {
        payload = await req.json();
    } catch {
        return Response.json({ error: "Invalid request." }, { status: 400 });
    }

    const mobile = typeof payload?.mobile === "string" ? payload.mobile.trim() : "";
    if (!MOBILE_RE.test(mobile)) {
        return Response.json({ error: "Enter a valid 10-digit Indian mobile number." }, { status: 400 });
    }

    const params = sanitizeParams(payload?.dynamicParams);

    const boBody = {
        mobile_number: mobile,
        login_type: "Mobile_OTP",
        portal: "Arihant_plus",
        portal_url: "",
        bitrix_fields: {
            ...UTM_DEFAULTS,
            ...params,
            main_Source: "1207",
            sub_source: "1241",
            source: "UC_JVI0U0",
        },
    };

    try {
        const response = await fetch(api_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Basic " + token,
            },
            body: JSON.stringify(boBody),
            cache: "no-store",
        });

        const data = await response.json().catch(() => null);
        const result = data?.result;

        if (!response.ok || !result) {
            console.error("[ekyc] Upstream error", response.status, data);
            return Response.json({ error: "Could not start KYC. Please try again." }, { status: 502 });
        }

        return Response.json({ url: signupUrl, result });
    } catch (err) {
        console.error("[ekyc] Request failed", err);
        return Response.json({ error: "Something went wrong. Please try again." }, { status: 502 });
    }
}
