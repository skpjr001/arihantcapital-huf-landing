export async function POST(req: Request) {
    const webinarsUrl = process.env.WEBINAR_URL;
    if (!webinarsUrl) {
        return Response.json({ error: "WEBINAR_URL is not configured" }, { status: 500 });
    }

    const result = await req.json().catch(() => null);
    const { mobile_number, email, name } = result?.values || {};
    const params = result?.dynamicParams || {}

    if (!name || !/^[6-9]\d{9}$/.test(mobile_number ?? "") || !email) {
        return Response.json({ error: "Please provide a valid name, mobile number and email." }, { status: 400 });
    }

    const UTM_SOURCE = params?.utm_source || 'source'
    const UTM_MEDIUM = params?.utm_medium || 'medium'
    const UTM_CAMPAIGN = params?.utm_campaign || 'campaign'
    const UTM_TERM = params?.utm_term || 'term'
    const UTM_CONTENT = params?.utm_content || 'content'
    const UTM_CODE = params?.utm_code || 'code'
    const UTM_AGENCY = params?.utm_agency || 'agency'
    const UTM_CAMPAIGN_ID = params?.utm_campaign_id || 'campaign_id'
    const UTM_ID = params?.utm_id || 'id'

    const boBody = {
        "mobile_number": mobile_number,
        "login_type": "Mobile_OTP",
        "portal": "Arihant_plus",
        "portal_url": "https://www.arihantplus.com/lp/webinar",
        "service": "",
        "mfapp": "0",
        "email": email,
        "bitrix_fields": {
            "utm_source": UTM_SOURCE,
            "utm_medium": UTM_MEDIUM,
            "utm_campaign": UTM_CAMPAIGN,
            "utm_term": UTM_TERM,
            "utm_content": UTM_CONTENT,
            "utm_code": UTM_CODE,
            "utm_agency": UTM_AGENCY,
            "utm_campaign_id": UTM_CAMPAIGN_ID,
            "utm_id": UTM_ID,
            "UF_CRM_1777966304": "",
            "UF_CRM_1777966388": "",
            "UF_CRM_1777967365": "",
            "UF_CRM_1777967434": "",
            "UF_CRM_1777967493": "",
            "UF_CRM_1777967616": "",
            "UF_CRM_1773912474689": "https://www.arihantplus.com/lp/webinar",
            "main_Source": "1207",
            "sub_source": "1241",
            "source": "Meta Ads Facebook /Google",
            "UC_JVI0U0": "Meta Ads Facebook /Google"
        },
        "inhousecrm": {
            "name": name,
            "mobile": mobile_number,
            "email": email,
            "source": "AP_LP_WEBINAR_4892",
            "sourceUrl": "https://www.arihantplus.com/lp/webinar",
            "message": "Webinar registration - Mumbai"
        }
    };

    console.log("boBody", boBody);

    try {
        const response = await fetch(webinarsUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic " + process.env.AUTH_TOKEN,
            },
            body: JSON.stringify(boBody),
            cache: "no-store",
        });

        const data = await response.json().catch(() => null);

        if (!response.ok) {
            console.error("Webinar API failed", response.status, data);
            return Response.json({ error: "Could not complete your registration. Please try again." }, { status: 502 });
        }

        return Response.json({ message: data?.result?.message ?? data?.message ?? "Registered", result: data?.result ?? null });
    } catch (err) {
        console.error("Webinar API error", err);
        return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 })
    }
}
