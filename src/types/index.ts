export type EventState =
  | 'new'
  | 'upcoming'
  | 'live'
  | 'ended'
  | 'settled'
  | 'cancelled'
  | 'suspended';

export type BackendEvent = {
  bet_allowed: boolean;
  bettable: boolean;
  chart_time_period: string | null;
  created: string;
  description: string | null;
  display_order: number | null;
  end_date: string | null;
  full_slug: string;
  hidden: boolean;
  id: string;
  inplay_enabled: boolean;
  modified: string;
  name: string;
  parent_id: string | null;
  seo_description: string | null;
  short_name: string | null;
  slug: string;
  special_rules: string | null;
  start_date: string | null;
  start_datetime: string | null;
  state: EventState;
  type: {
    domain: string;
    scope: string;
  };
};

export type Event = {
  betAllowed: boolean;
  bettable: boolean;
  chartTimePeriod: string | null;
  created: string;
  description: string | null;
  display_order: number | null;
  endDate: string | null;
  fullSlug: string;
  hidden: boolean;
  id: string;
  inplayEnabled: boolean;
  modified: string;
  name: string;
  parentId: string | null;
  seoDescription: string | null;
  shortName: string | null;
  slug: string;
  specialRules: string | null;
  startDate: string | null;
  startDatetime: string | null;
  state: EventState;
  type: {
    domain: string;
    scope: string;
  };
};

export type RequestStatus = 'IDLE' | 'PENDING' | 'SUCCESS' | 'ERROR';
