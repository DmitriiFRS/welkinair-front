"use client";

import { useState, useMemo, useEffect } from "react";
import { IProduct, IParams, IParamsOther } from "@/src/types/product.type";

interface ProductSpecsProps {
	product: IProduct;
	selectedVariationId: string;
}

// Mapping of technical keys to Russian labels
const SPEC_LABELS: Record<string, string> = {
	// Air Conditioner
	cooling_btu: "Охлаждение (BTU)",
	cooling_kw: "Охлаждение (кВт)",
	heating_btu: "Обогрев (BTU)",
	heating_kw: "Обогрев (кВт)",
	energy_output: "Энергоэффективность",
	m2: "Площадь помещения (м²)",
	m3: "Объем помещения (м³)",
	freon: "Тип фреона",
	size_inner: "Размер внутреннего блока",
	size_outer: "Размер внешнего блока",
	airflow: "Воздушный поток",
	noise_inner: "Уровень шума (внутр.)",
	noise_outer: "Уровень шума (внешн.)",
	temperature: "Рабочая температура",
	route_length: "Длина трассы",
	route_diameter: "Диаметр трассы",
	weight_inner: "Вес внутреннего блока",
	weight_outer: "Вес внешнего блока",

	// Washing Machine
	type: "Тип",
	color: "Цвет",
	loading_type: "Тип загрузки",
	motor_type: "Тип мотора",
	has_steam: "Функция пара",
	load_capacity: "Загрузка (кг)",
	has_smart_control: "Умное управление",
	max_spin_speed: "Макс. скорость отжима",
	depth: "Глубина (см)",
	display_type: "Тип дисплея",
	energy_class: "Класс энергопотребления",
	water_consumption: "Потребление воды (л)",
	noise_level_spin: "Уровень шума (отжим)",
	programs_count: "Количество программ",
	category_type: "Категория",
	mode_rinse_spin: "Полоскание + Отжим",
	mode_spin_only: "Только отжим",
	mode_cotton: "Хлопок",
	mode_delicates: "Деликатная стирка",
	mode_eco_40_60: "Эко 40-60",
	mode_quick_15: "Быстрая 15'",
	mode_quick_45: "Быстрая 45'",
	mode_allergy_care: "Гипоаллергенная",
	mode_jeans: "Джинсы",
	mode_down_wear: "Пуховики",
	mode_wool: "Шерсть",
	mode_synthetics: "Синтетика",
	mode_mixed: "Смешанная",
	mode_cold_wash: "Холодная стирка",
	mode_turbo_wash: "Турбо стирка",
	mode_air_refresh: "Освежение паром",
	has_extra_rinse: "Доп. полоскание",
	has_pre_wash: "Предварительная стирка",
	has_steam_wash: "Стирка с паром",
	has_heat_pump: "Тепловой насос",
	mode_quick_wash_dry: "Быстрая стирка + Сушка",
	mode_wash_dry: "Стирка + Сушка",
	mode_dry_only: "Только сушка",
	has_auto_dry: "Автосушка",
	has_time_dry: "Сушка по времени",
	has_anti_crease: "Защита от сминания",
	has_uv_sanitization: "УФ стерилизация",

	// Fridge
	noise: "Уровень шума",
	cold_retention_hours: "Автономное сохранение холода (ч)",
	total_volume: "Общий объем (л)",
	total_net_volume: "Полезный объем (л)",
	fridge_net_volume: "Объем холодильной камеры (л)",
	freezer_net_volume: "Объем морозильной камеры (л)",
	chambers_count: "Количество камер",
	doors_count: "Количество дверей",
	door_opening_dir: "Сторона открытия дверей",
	is_reversible_doors: "Перенавешиваемые двери",
	zero_clearance: "Zero Clearance",
	freezer_location: "Расположение морозильной камеры",
	surface_material: "Материал покрытия",
	is_panel_changeable: "Сменные панели",
	has_included_panels: "Панели в комплекте",
	handle_type: "Тип ручки",
	cable_length: "Длина кабеля",
	display_location: "Расположение дисплея",
	temp_indication: "Индикация температуры",
	display: "Дисплей",
	freezing_capacity: "Мощность замораживания (кг/сут)",
	freezer_defrost: "Разморозка морозильной камеры",
	fridge_defrost: "Разморозка холодильной камеры",
	min_freezer_temp: "Мин. температура морозилки",
	max_freezer_temp: "Макс. температура морозилки",
	min_fridge_temp: "Мин. температура холодильника",
	max_fridge_temp: "Макс. температура холодильника",
	is_inverter: "Инверторный компрессор",
	has_fresh_zone: "Зона свежести",
	has_egg_tray: "Лоток для яиц",
	has_ice_tray: "Лоток для льда",

	// Boiler
	heating_source: "Источник нагрева",
	gas_pressure: "Давление газа",
	performance: "Производительность",
	kpd: "КПД",
	temp_range_heating: "Темп. диапазон отопления",
	temp_range_heating_heatWater: "Темп. диапазон ГВС",
	working_pressure: "Рабочее давление",
	nominal_voltage: "Номинальное напряжение",
	max_heat_output: "Макс. тепловая мощность",
	pipe_diameter_heating: "Диаметр труб отопления",
	pipe_diameter_heat_water: "Диаметр труб ГВС",
	pipe_diameter: "Диаметр труб",
	size: "Размеры",
	expansion_tank_vol: "Объем расширительного бака",
	pump_brand: "Бренд насоса",
	gas_valve_brand: "Бренд газового клапана",
	heat_water_25: "ГВС при ∆t=25°C",
	heat_water_30: "ГВС при ∆t=30°C",
	max_min_gas_pressure: "Макс./Мин. давление газа",
	oxygen_supply: "Подача кислорода",
	gas_flowrate: "Расход газа",
	combustion_chamber: "Камера сгорания",

	// Dehumidifier / Humidifier / Others
	power_supply: "Электропитание",
	consumption: "Потребляемая мощность",
	nominal_power: "Номинальная мощность",
	capacity: "Производительность",
	circ_air_flow: "Циркуляция воздуха",
	weight: "Вес",
	input_nominal_power: "Входная номинальная мощность",
	compressor: "Компрессор",
	air_filter: "Воздушный фильтр",
	working_temp: "Рабочая температура",
	drenage: "Дренаж",
	nominal_frequency: "Номинальная частота",
	rated_power: "Расчетная мощность",
	noise_min: "Мин. уровень шума",
	anions: "Анионы",
	particle_removal: "Удаление частиц",
	formaldehyde: "Формальдегид",
	filter_replacement: "Замена фильтра",
	tank_capacity: "Объем бака",
	max_spray_vol: "Макс. объем распыления",
	engine_speed: "Скорость двигателя",
	degree_oscil: "Угол колебаний",
	air_velocity: "Скорость воздуха",
	temp_output: "Температура на выходе",
};

export const ProductSpecs = ({ product, selectedVariationId }: ProductSpecsProps) => {
	const [showAll, setShowAll] = useState(false);

	const specs = useMemo(() => {
		let paramsSource: IParams | undefined;
		let paramsOtherSource: IParamsOther | undefined;

		// Determine source based on variation
		if (selectedVariationId && selectedVariationId !== "none" && product.variation) {
			const variation = product.variation.find((v) => v.id.toString() === selectedVariationId);
			if (variation) {
				console.log("ProductSpecs: Found variation", variation);
				paramsSource = variation.params;
				if (Array.isArray(paramsSource)) {
					console.log("ProductSpecs: paramsSource is array, taking first element");
					paramsSource = paramsSource[0];
				}

				paramsOtherSource = variation.params_other;
				if (Array.isArray(paramsOtherSource)) {
					console.log("ProductSpecs: paramsOtherSource is array, taking first element");
					paramsOtherSource = paramsOtherSource[0];
				}
				console.log("ProductSpecs: paramsSource", paramsSource);
				console.log("ProductSpecs: paramsOtherSource", paramsOtherSource);
			}
		}

		// Flatten and extract valid specs
		const extractedSpecs: { label: string; value: string }[] = [];

		const processObj = (obj: Record<string, unknown>) => {
			if (!obj) return;
			Object.entries(obj).forEach(([key, value]) => {
				// Skip internal fields and null/empty values
				if (key === "id" || key === "documentId" || value === null || value === "") return;

				// Handle boolean values
				let displayValue = value;
				if (typeof value === "boolean") {
					displayValue = value ? "Да" : "Нет";
				}

				if (SPEC_LABELS[key]) {
					extractedSpecs.push({
						label: SPEC_LABELS[key],
						value: String(displayValue),
					});
				}
			});
		};

		// Helper to handle array or object
		const getFirstItem = (item: unknown) => {
			if (!item) return null;
			if (Array.isArray(item) && item.length > 0) return item[0];
			if (!Array.isArray(item) && typeof item === "object") return item;
			return null;
		};

		// Process IParams (airconds, heat_curtains)
		if (paramsSource) {
			const airconds = getFirstItem(paramsSource.airconds);
			if (airconds) processObj(airconds as Record<string, unknown>);

			const heatCurtains = getFirstItem(paramsSource.heat_curtains);
			if (heatCurtains) processObj(heatCurtains as Record<string, unknown>);
		}

		// Process IParamsOther (humids, dehumids, etc.)
		if (paramsOtherSource) {
			const humids = getFirstItem(paramsOtherSource.humids);
			if (humids) processObj(humids as Record<string, unknown>);

			const dehumids = getFirstItem(paramsOtherSource.dehumids);
			if (dehumids) processObj(dehumids as Record<string, unknown>);

			const boilers = getFirstItem(paramsOtherSource.boilers);
			if (boilers) processObj(boilers as Record<string, unknown>);

			const fridges = getFirstItem(paramsOtherSource.fridges);
			if (fridges) processObj(fridges as Record<string, unknown>);

			const washes = getFirstItem(paramsOtherSource.washes);
			if (washes) processObj(washes as Record<string, unknown>);
		}

		console.log("ProductSpecs: extractedSpecs", extractedSpecs);
		return extractedSpecs;
	}, [product, selectedVariationId]);

	if (specs.length === 0) {
		return null;
	}

	const visibleSpecs = showAll ? specs : specs.slice(0, 6);

	return (
		<div>
			<h3 className="font-bold text-[#111418] mb-4">Характеристики</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
				{visibleSpecs.map((spec, index) => (
					<div key={index} className="flex justify-between py-2 border-b border-gray-100">
						<span className="text-gray-500">{spec.label}</span>
						<span className="font-medium text-[#111418] text-right">{spec.value}</span>
					</div>
				))}
			</div>
			{specs.length > 6 && (
				<button onClick={() => setShowAll(!showAll)} className="mt-4 text-primary font-bold text-sm hover:underline">
					{showAll ? "Свернуть характеристики" : "Смотреть все характеристики"}
				</button>
			)}
		</div>
	);
};
