// These routes match grabme-platform's Passenger controllers. Never call the
// legacy subscription activation endpoint: it has no payment confirmation gate.
export const apiBase = (process.env.NEXT_PUBLIC_PASSENGER_API_URL || '').replace(/\/$/, '');
export const apiEnabled = Boolean(apiBase && (apiBase.startsWith('https://') || /^http:\/\/(localhost|127\.0\.0\.1)(:|\/|$)/.test(apiBase)));
export async function request<T>(path: string, options: {
    token?: string;
    body?: unknown;
    signal?: AbortSignal;
} = {}): Promise<T> {
    if (!apiEnabled)
        throw new Error('CONNECTION_UNAVAILABLE');
    const response = await fetch(apiBase + path, { method: options.body ? 'POST' : 'GET', headers: { Accept: 'application/json', ...(options.body ? { 'Content-Type': 'application/json' } : {}), ...(options.token ? { Authorization: `Bearer ${options.token}` } : {}) }, body: options.body ? JSON.stringify(options.body) : undefined, signal: options.signal ?? AbortSignal.timeout(15000), cache: 'no-store', credentials: 'omit' });
    if (!response.ok)
        throw new Error(response.status === 401 ? 'SESSION_EXPIRED' : response.status === 429 ? 'RATE_LIMITED' : 'REQUEST_FAILED');
    return response.json();
}
export type Plan = {
    id: string;
    name: string;
    type: string;
    monthlyPrice: number;
    discountPercent: number;
    monthlyRideCredits: number;
    description?: string;
};
export type Profile = {
    name?: string;
    currentSubscription?: {
        status: string;
        endsAt?: string;
        subscriptionPlan: Plan;
    };
    studentMember?: {
        verified: boolean;
    };
    corporateAccount?: {
        companyName: string;
    };
};
