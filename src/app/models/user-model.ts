export class UserModel {
    id?:            string;
    username?:      string;
    password?:      string;
    hntAccount?:    string;
    apiAccount?:    ApiAccount; // pojo
    hotspots?:      Hotspots;   // pojo
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
    balance?:  string;
    address?:  string;
}

export class Hotspots{
    id?:                string;
    userId?:            string;
    price?:             string;
    roi?:               string;
    roi_days_left?:     string;
    roi_days_past?:     string;
    rewards_24?:        string;
    rewards_7d?:        string;
    rewards_30d?:       string;
    lng?:               string;
    lat?:               string;
    timestamp_added?:   string;
    reward_scale?:      string;
    payer?:             string;
    owner?:             string;
    nonce?:             string;
    name?:              string;
    mode?:              string;
    location_hex?:      string;
    location?:          string;
    last_poc_challenge?:string;
    last_change_block?: string;
    gain?:              string;
    elevation?:         string;
    block_added?:       string;
    block?:             string;
    address?:           string;
}
