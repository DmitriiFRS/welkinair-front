import { IPagination } from "./common.type";

export interface IPopularProducts {
	data: {
		id: number;
		documentId: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		locale: string;
		products: IProduct[];
	};
	meta: {
		pagination: IPagination;
	};
}

export interface IProduct {
	id: number;
	documentId: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string;
	name: string;
	slug: string;
	description: string;
	short_description: string;
	price: number;
	variation: IVariation[] | null;
	previewImage: IImage;
	images: IImage[];
}

export interface IImage {
	id: number;
	documentId: string;
	url: string;
	alternativeText: string | null;
	width: number;
	height: number;
}

export interface IVariation {
	id: number;
	variation: string;
	value: string;
	price: number | null;
	price_wifi: number | null;
	params: IParams;
	params_other: IParamsOther;
}

export interface IParams {
	airconds: IAircond[];
	heat_curtains: IHeatCurtains[];
}

export interface IParamsOther {
	humids: IHumid[];
	dehumids: IDehumid[];
	boilers: IBoiler[];
	fridges: IFridge[];
	washes: IWash[];
}

export interface IWash {
	type: string | null;
	color: string | null;
	loading_type: string | null;
	motor_type: string | null;
	has_steam: boolean | null;
	load_capacity: string | null;
	has_smart_control: boolean | null;
	max_spin_speed: number | null;
	depth: number | null;
	display_type: string | null;
	energy_class: string | null;
	water_consumption: number | null;
	noise_level_spin: number | null;
	programs_count: number | null;
	category_type: string | null;
	mode_rinse_spin: boolean | null;
	mode_spin_only: boolean | null;
	mode_cotton: boolean | null;
	mode_delicates: boolean | null;
	mode_eco_40_60: boolean | null;
	mode_quick_15: boolean | null;
	mode_quick_45: boolean | null;
	mode_allergy_care: boolean | null;
	mode_jeans: boolean | null;
	mode_down_wear: boolean | null;
	mode_wool: boolean | null;
	mode_synthetics: boolean | null;
	mode_mixed: boolean | null;
	mode_cold_wash: boolean | null;
	mode_turbo_wash: boolean | null;
	mode_air_refresh: boolean | null;
	has_extra_rinse: boolean | null;
	has_pre_wash: boolean | null;
	has_steam_wash: boolean | null;
	has_heat_pump: boolean | null;
	mode_quick_wash_dry: boolean | null;
	mode_wash_dry: boolean | null;
	mode_dry_only: boolean | null;
	has_auto_dry: boolean | null;
	has_time_dry: boolean | null;
	has_anti_crease: boolean | null;
	has_uv_sanitization: boolean | null;
}

export interface IFridge {
	color: string | null;
	type: string | null;
	noise: string | null;
	cold_retention_hours: string | null;
	total_volume: string | null;
	total_net_volume: string | null;
	fridge_net_volume: string | null;
	freezer_net_volume: string | null;
	chambers_count: string | null;
	doors_count: string | null;
	door_opening_dir: string | null;
	is_reversible_doors: string | null;
	zero_clearance: string | null;
	freezer_location: string | null;
	surface_material: string | null;
	is_panel_changeable: string | null;
	has_included_panels: string | null;
	handle_type: string | null;
	cable_length: string | null;
	display_location: string | null;
	temp_indication: string | null;
	has_smart_control: string | null;
	display: boolean | null;
	freon: string | null;
	freezing_capacity: string | null;
	freezer_defrost: string | null;
	fridge_defrost: string | null;
	min_freezer_temp: string | null;
	max_freezer_temp: string | null;
	min_fridge_temp: string | null;
	max_fridge_temp: string | null;
	is_inverter: boolean | null;
	has_fresh_zone: boolean | null;
	has_egg_tray: boolean | null;
	has_ice_tray: boolean | null;
}

export interface IBoiler {
	heating_source: string | null;
	gas_pressure: string | null;
	performance: string | null;
	kpd: string | null;
	temp_range_heating: string | null;
	temp_range_heating_heatWater: string | null;
	working_pressure: string | null;
	nominal_voltage: string | null;
	max_heat_output: string | null;
	pipe_diameter_heating: string | null;
	pipe_diameter_heat_water: string | null;
	pipe_diameter: string | null;
	size: string | null;
	expansion_tank_vol: string | null;
	pump_brand: string | null;
	gas_valve_brand: string | null;
	heat_water_25: string | null;
	heat_water_30: string | null;
	max_min_gas_pressure: string | null;
	oxygen_supply: string | null;
	gas_flowrate: string | null;
	combustion_chamber: string | null;
}

export interface IDehumid {
	power_supply: string | null;
	consumption: string | null;
	nominal_power: string | null;
	capacity: string | null;
	circ_air_flow: string | null;
	freon: string | null;
	size: string | null;
	weight: string | null;
	m2: string | null;
	performance: string | null;
	input_nominal_power: string | null;
	compressor: string | null;
	air_filter: string | null;
	working_temp: string | null;
	drenage: string | null;
}

export interface IHumid {
	nominal_power: string | null;
	nominal_frequency: string | null;
	rated_power: string | null;
	noise_min: string | null;
	anions: string | null;
	particle_removal: string | null;
	formaldehyde: string | null;
	m2: string | null;
	filter_replacement: string | null;
	weight: string | null;
	size: string | null;
	tank_capacity: string | null;
	max_spray_vol: string | null;
	cable_length: string | null;
	engine_speed: string | null;
	airflow: string | null;
	degree_oscil: string | null;
}

export interface IAircond {
	cooling_btu: string | null;
	cooling_kw: string | null;
	heating_btu: string | null;
	heating_kw: string | null;
	energy_output: string | null;
	m2: string | null;
	m3: string | null;
	freon: string | null;
	size_inner: string | null;
	size_outer: string | null;
	airflow: string | null;
	noise_inner: string | null;
	noise_outer: string | null;
	temperature: string | null;
	route_length: string | null;
	route_diameter: string | null;
	weight_inner: string | null;
	weight_outer: string | null;
}

export interface IHeatCurtains {
	power_supply: string | null;
	airflow: string | null;
	air_velocity: string | null;
	temp_output: string | null;
	consumption: string | null;
	size: string | null;
}

// {
//   data: {
//     id: 5,
//     documentId: 'fxhj2zfk222vhy6iyomcf0iz',
//     createdAt: '2025-12-21T18:34:01.255Z',
//     updatedAt: '2025-12-21T18:36:51.394Z',
//     publishedAt: '2025-12-21T18:36:51.412Z',
//     locale: 'ru',
//     products: [ [Object], [Object] ]
//   },
//   meta: {}
// }

export interface Product {
	id: number;
	slug: string;
	name: string;
	short_description: string;
	description: string;
	price: number;
	previewImage: {
		url: string;
	};
	images: {
		data: {
			attributes: {
				url: string;
			};
		}[];
	};
	variation: {
		id: number;
		price: number;
		variation: string;
		value: string;
	}[];
}
