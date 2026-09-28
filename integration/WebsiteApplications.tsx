import { useRef, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { AdminButton, type AdminDesign } from './design-components';
type Application = {
    id: string;
    kind: string;
    category: string;
    company: string;
    contact: string;
    email: string;
    locations: string;
    interest: string;
    teamSize?: number;
    volume?: number;
    campaign?: string;
    status: string;
    ownerId: string | null;
    revision: number;
    createdAt: string;
};
type Audit = {
    id: string;
    actorId: string | null;
    action: string;
    note: string;
    previousStatus: string | null;
    nextStatus: string;
    createdAt: string;
};
export function WebsiteApplications({ design, get, post }: {
    design: AdminDesign;
    get: <T>(path: string) => Promise<T>;
    post: <T>(path: string, body?: unknown) => Promise<T>;
}) {
    const c = design.foundation.colors;
    const flight = useRef(false);
    const [items, setItems] = useState<Application[]>([]), [cursor, setCursor] = useState<string | null>(null), [selected, setSelected] = useState<Application | null>(null), [history, setHistory] = useState<Audit[]>([]), [owner, setOwner] = useState(''), [note, setNote] = useState(''), [status, setStatus] = useState('IN_REVIEW'), [message, setMessage] = useState(''), [busy, setBusy] = useState(false), [loaded, setLoaded] = useState(false);
    async function run(action: () => Promise<void>) { if (flight.current)
        return; flight.current = true; setBusy(true); setMessage(''); try {
        await action();
    }
    catch {
        setMessage('Request failed or review changed. Refresh before saving again. Your note is retained.');
    }
    finally {
        flight.current = false;
        setBusy(false);
    } }
    async function load(next?: string) { const result = await get<{
        items: Application[];
        nextCursor: string | null;
    }>('/admin/website/applications' + (next ? '?cursor=' + encodeURIComponent(next) : '')); setItems(previous => next ? [...previous, ...result.items] : result.items); setCursor(result.nextCursor); setLoaded(true); if (!next) {
        setSelected(null);
        setHistory([]);
    } }
    async function open(item: Application) { const audit = await get<Audit[]>(`/admin/website/applications/${item.id}/history`); setSelected(item); setOwner(item.ownerId ?? ''); setStatus(item.status); setNote(''); setHistory(audit); }
    return <View style={{ padding: 24, gap: 16, backgroundColor: c.surface, borderRadius: 20 }}><Text accessibilityRole="header" style={{ fontSize: 24, color: c.textPrimary }}>Website applications</Text><Text style={{ color: c.textMuted }}>Partnership and corporate applications. Approval records a review decision only; provisioning and commercial terms require their existing authorized workflows.</Text><AdminButton design={design} disabled={busy} label="Refresh applications" onPress={() => void run(() => load())}/>{loaded && !items.length ? <Text style={{ color: c.textMuted }}>No applications.</Text> : null}{items.map(item => <AdminButton design={design} key={item.id} disabled={busy} variant="secondary" label={`${item.kind} · ${item.company} · ${item.status}`} onPress={() => void run(() => open(item))}/>)}{cursor ? <AdminButton design={design} disabled={busy} label="Load more" onPress={() => void run(() => load(cursor))}/> : null}{selected ? <View style={{ gap: 12 }}><Text selectable style={{ color: c.textPrimary }}>{selected.id} · {selected.createdAt}</Text><Text selectable style={{ color: c.textPrimary }}>{selected.company} · {selected.category}{'\n'}{selected.contact} · {selected.email}{'\n'}{selected.locations}{'\n'}{selected.interest}{'\n'}{selected.campaign ?? ''}{'\n'}Team: {selected.teamSize ?? '—'} · Volume: {selected.volume ?? '—'}</Text><Text style={{ color: c.textMuted }}>Assigned owner UUID (blank means unassigned)</Text><TextInput accessibilityLabel="Assigned owner UUID" value={owner} onChangeText={setOwner} style={{ padding: 12, borderColor: c.border, borderWidth: 1, color: c.textPrimary }}/><View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>{['RECEIVED', 'IN_REVIEW', 'NEEDS_INFORMATION', 'APPROVED', 'REJECTED'].map(value => <AdminButton design={design} disabled={busy} key={value} variant="secondary" label={`${status === value ? '✓ ' : ''}${value}`} onPress={() => setStatus(value)}/>)}</View><Text style={{ color: c.textMuted }}>Internal review note. Requests for information need a separate approved communication channel.</Text><TextInput accessibilityLabel="Internal review note" multiline value={note} onChangeText={setNote} maxLength={2000} style={{ padding: 12, borderColor: c.border, borderWidth: 1, color: c.textPrimary }}/><AdminButton design={design} disabled={busy || !note.trim()} label="Save reviewed decision" onPress={() => void run(async () => { await post(`/admin/website/applications/${selected.id}/review`, { revision: selected.revision, status, ownerId: owner.trim() || null, note: note.trim() }); await load(); setMessage('Review recorded. No commercial access or entitlements created.'); })}/><Text accessibilityRole="header" style={{ color: c.textPrimary }}>Audit history</Text>{history.map(event => <Text selectable key={event.id} style={{ color: c.textMuted }}>{event.createdAt} · {event.actorId ?? 'Applicant'} · {event.previousStatus ?? 'NEW'} → {event.nextStatus}{'\n'}{event.note}</Text>)}</View> : null}{message ? <Text accessibilityRole="alert" style={{ color: c.textPrimary }}>{message}</Text> : null}</View>;
}
