export class UserModel {
    id?:            string;
    username?:      string;
    password?:      string;
    hntAccount?:    string;

    acc_reward24?:          number;
    acc_reward7d?:          number;
    acc_reward30d?:         number;
    acc_reward_lifetime?:   number;
    apiAccount?:    ApiAccount; // pojo
    hotspots?:      Hotspots[];   // pojo
}

export class ApiAccount {
    id?: string;
    validator_count?: string;
    staked_balance?: string;
    speculative_sec_nonce?: string;
    speculative_nonce?:  string;
    sec_nonce?:  string;
    sec_balance?:  string;
    nonce?:  string;
    hotspot_count?:  string;
    dc_nonce?:  string;
    dc_balance?:  string;
    block?:  string;
    balance?:  number;
    address?:  string;
}

export class Hotspots{
    id?:                string;
    userId?:            string;
    price?:             number;
    roi?:               number;
    roi_days_left?:     number;
    roi_percent_left?:  number;
    rewards_24?:        number;
    rewards_7d?:        number;
    rewards_30d?:       number;
    rewards_lifetime?:  number;
    lng?:               string;
    lat?:               string;
    timestamp_added?:   string;
    reward_scale?:      number;
    payer?:             string;
    owner?:             string;
    nonce?:             string;
    name?:              string;
    mode?:              string;
    location_hex?:      string;
    location?:          string;
    last_poc_challenge?:string;
    last_change_block?: string;
    gain?:              number;
    elevation?:         number;
    block_added?:       string;
    block?:             string;
    address?:           string;

    hotspotDto?:        HotspotDTO;
}

export class HotspotDTO{
    price?:             number;
    roi?:               number;
    roi_days_left?:     number;
    roi_days_past?:     number;
    rewards_24?:        number;
    rewards_7d?:        number;
    rewards_30d?:       number;
    rewards_lifetime?:  number;
}
