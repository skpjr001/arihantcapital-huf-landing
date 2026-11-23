export async function POST(req: Request) {
    const api_url = process.env.PRIMARY_URL;
    const token = process.env.AUTH_TOKEN;
    const signupUrl = process.env.SIGNUP_URL;

    if (!api_url || !token || !signupUrl) {
        throw new Error('Invalid environment credentials')
    }

    const result = await req.json();
    const mobile = result?.mobile || ''
    const params = result?.dynamicParams || {}

    const UTM_SOURCE = params?.utm_source || 'source'
    const UTM_MEDIUM = params?.utm_medium || 'medium'
    const UTM_CAMPAIGN = params?.utm_campaign || 'campaign'
    const UTM_TERM = params?.utm_term || 'term'
    const UTM_CONTENT = params?.utm_content || 'content'
    const UTM_CODE = params?.utm_code || 'code'
    const UTM_AGENCY = params?.utm_agency || 'agency'

    const boBody = {
        mobile_number: mobile,
        Account_Type: "HUF_Acc",
        isConsentsubmited: true,
        login_type: "Mobile_OTP",
        portal: "Arihant_plus",
        portal_url: "https://www.arihantcapital.com/HUFLandingPage",
        bitrix_fields: {
            utm_source: UTM_SOURCE,
            utm_medium: UTM_MEDIUM,
            utm_campaign: UTM_CAMPAIGN,
            utm_term: UTM_TERM,
            utm_content: UTM_CONTENT,
            utm_code: UTM_CODE,
            utm_agency: UTM_AGENCY,
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


        return Response.json({ url: signupUrl, result });
    } catch (err) {
        return Response.json({ error: err }, { status: 500 })
  }
}
