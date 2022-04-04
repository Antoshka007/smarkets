import { BackendEvent, Event } from '../../types';

export const adaptEvent = (event: BackendEvent): Event => {
  return {
    betAllowed: event.bet_allowed,
    bettable: event.bettable,
    chartTimePeriod: event.chart_time_period,
    created: event.created,
    description: event.description,
    display_order: event.display_order,
    endDate: event.end_date,
    fullSlug: event.full_slug,
    hidden: event.hidden,
    id: event.id,
    inplayEnabled: event.inplay_enabled,
    modified: event.modified,
    name: event.name,
    parentId: event.parent_id,
    seoDescription: event.seo_description,
    shortName: event.short_name,
    slug: event.slug,
    specialRules: event.special_rules,
    startDate: event.start_date,
    startDatetime: event.start_datetime,
    state: event.state,
    type: event.type,
  };
};
