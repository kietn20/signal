export type SessionStatus = 'active' | 'ended' | 'archived';

export interface Session {
  id: string;
  userId: string;
  title: string | null;
  status: SessionStatus;
  startedAt: string;
  endedAt: string | null;
  metadata: Record<string, unknown>;
}