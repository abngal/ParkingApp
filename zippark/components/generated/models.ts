// Code generated by wunderctl. DO NOT EDIT.

import type function_ParkingMutationsFinishParking from "../../.wundergraph/operations/parking/mutations/FinishParking";
import type function_ParkingMutationsStartParking from "../../.wundergraph/operations/parking/mutations/StartParking";
import type function_UsersGet from "../../.wundergraph/operations/users/get";
import type function_UsersSubscribe from "../../.wundergraph/operations/users/subscribe";
import type function_UsersUpdate from "../../.wundergraph/operations/users/update";
import type { ExtractInput, ExtractResponse } from "@wundergraph/sdk/operations";
import type { OperationErrors } from "./ts-operation-errors";

export interface pgdb_parking_transactionsWhereInput {
	AND?: pgdb_parking_transactionsWhereInput;
	OR?: pgdb_parking_transactionsWhereInput[];
	NOT?: pgdb_parking_transactionsWhereInput;
	id?: pgdb_BigIntFilter;
	created_at?: pgdb_DateTimeFilter;
	vehicle_plate?: pgdb_StringFilter;
	datetime_in?: pgdb_DateTimeFilter;
	datetime_out?: pgdb_DateTimeNullableFilter;
	amount?: pgdb_IntNullableFilter;
	parking_rate?: pgdb_BigIntFilter;
	parking_rates?: pgdb_Parking_ratesRelationFilter;
}

export interface pgdb_BigIntFilter {
	equals?: string;
	in?: string[];
	notIn?: string[];
	lt?: string;
	lte?: string;
	gt?: string;
	gte?: string;
	not?: pgdb_NestedBigIntFilter;
}

export interface pgdb_NestedBigIntFilter {
	equals?: string;
	in?: string[];
	notIn?: string[];
	lt?: string;
	lte?: string;
	gt?: string;
	gte?: string;
	not?: pgdb_NestedBigIntFilter;
}

export interface pgdb_DateTimeFilter {
	equals?: string;
	in?: string[];
	notIn?: string[];
	lt?: string;
	lte?: string;
	gt?: string;
	gte?: string;
	not?: pgdb_NestedDateTimeFilter;
}

export interface pgdb_NestedDateTimeFilter {
	equals?: string;
	in?: string[];
	notIn?: string[];
	lt?: string;
	lte?: string;
	gt?: string;
	gte?: string;
	not?: pgdb_NestedDateTimeFilter;
}

export interface pgdb_StringFilter {
	equals?: string;
	in?: string[];
	notIn?: string[];
	lt?: string;
	lte?: string;
	gt?: string;
	gte?: string;
	contains?: string;
	startsWith?: string;
	endsWith?: string;
	mode?: "default" | "insensitive";
	not?: pgdb_NestedStringFilter;
}

export interface pgdb_NestedStringFilter {
	equals?: string;
	in?: string[];
	notIn?: string[];
	lt?: string;
	lte?: string;
	gt?: string;
	gte?: string;
	contains?: string;
	startsWith?: string;
	endsWith?: string;
	not?: pgdb_NestedStringFilter;
}

export interface pgdb_DateTimeNullableFilter {
	equals?: string;
	in?: string[];
	notIn?: string[];
	lt?: string;
	lte?: string;
	gt?: string;
	gte?: string;
	not?: pgdb_NestedDateTimeNullableFilter;
}

export interface pgdb_NestedDateTimeNullableFilter {
	equals?: string;
	in?: string[];
	notIn?: string[];
	lt?: string;
	lte?: string;
	gt?: string;
	gte?: string;
	not?: pgdb_NestedDateTimeNullableFilter;
}

export interface pgdb_IntNullableFilter {
	equals?: number;
	in?: number[];
	notIn?: number[];
	lt?: number;
	lte?: number;
	gt?: number;
	gte?: number;
	not?: pgdb_NestedIntNullableFilter;
}

export interface pgdb_NestedIntNullableFilter {
	equals?: number;
	in?: number[];
	notIn?: number[];
	lt?: number;
	lte?: number;
	gt?: number;
	gte?: number;
	not?: pgdb_NestedIntNullableFilter;
}

export interface pgdb_Parking_ratesRelationFilter {
	is?: pgdb_parking_ratesWhereInput;
	isNot?: pgdb_parking_ratesWhereInput;
}

export interface pgdb_parking_ratesWhereInput {
	AND?: pgdb_parking_ratesWhereInput;
	OR?: pgdb_parking_ratesWhereInput[];
	NOT?: pgdb_parking_ratesWhereInput;
	id?: pgdb_BigIntFilter;
	created_at?: pgdb_DateTimeNullableFilter;
	vehicle_id?: pgdb_BigIntNullableFilter;
	min_hours?: pgdb_IntNullableFilter;
	min_amount?: pgdb_IntNullableFilter;
	variable_amount?: pgdb_IntNullableFilter;
	is_active?: pgdb_BoolFilter;
	vehicle_types?: pgdb_Vehicle_typesRelationFilter;
	parking_transactions?: pgdb_Parking_transactionsListRelationFilter;
}

export interface pgdb_BigIntNullableFilter {
	equals?: string;
	in?: string[];
	notIn?: string[];
	lt?: string;
	lte?: string;
	gt?: string;
	gte?: string;
	not?: pgdb_NestedBigIntNullableFilter;
}

export interface pgdb_NestedBigIntNullableFilter {
	equals?: string;
	in?: string[];
	notIn?: string[];
	lt?: string;
	lte?: string;
	gt?: string;
	gte?: string;
	not?: pgdb_NestedBigIntNullableFilter;
}

export interface pgdb_BoolFilter {
	equals?: boolean;
	not?: pgdb_NestedBoolFilter;
}

export interface pgdb_NestedBoolFilter {
	equals?: boolean;
	not?: pgdb_NestedBoolFilter;
}

export interface pgdb_Vehicle_typesRelationFilter {
	is?: pgdb_vehicle_typesWhereInput;
	isNot?: pgdb_vehicle_typesWhereInput;
}

export interface pgdb_vehicle_typesWhereInput {
	AND?: pgdb_vehicle_typesWhereInput;
	OR?: pgdb_vehicle_typesWhereInput[];
	NOT?: pgdb_vehicle_typesWhereInput;
	id?: pgdb_BigIntFilter;
	created_at?: pgdb_DateTimeNullableFilter;
	code?: pgdb_StringNullableFilter;
	description?: pgdb_StringNullableFilter;
	parking_rates?: pgdb_Parking_ratesListRelationFilter;
}

export interface pgdb_StringNullableFilter {
	equals?: string;
	in?: string[];
	notIn?: string[];
	lt?: string;
	lte?: string;
	gt?: string;
	gte?: string;
	contains?: string;
	startsWith?: string;
	endsWith?: string;
	mode?: "default" | "insensitive";
	not?: pgdb_NestedStringNullableFilter;
}

export interface pgdb_NestedStringNullableFilter {
	equals?: string;
	in?: string[];
	notIn?: string[];
	lt?: string;
	lte?: string;
	gt?: string;
	gte?: string;
	contains?: string;
	startsWith?: string;
	endsWith?: string;
	not?: pgdb_NestedStringNullableFilter;
}

export interface pgdb_Parking_ratesListRelationFilter {
	every?: pgdb_parking_ratesWhereInput;
	some?: pgdb_parking_ratesWhereInput;
	none?: pgdb_parking_ratesWhereInput;
}

export interface pgdb_Parking_transactionsListRelationFilter {
	every?: pgdb_parking_transactionsWhereInput;
	some?: pgdb_parking_transactionsWhereInput;
	none?: pgdb_parking_transactionsWhereInput;
}

export interface pgdb_parking_transactionsCreateInput {
	id?: string;
	created_at?: string;
	vehicle_plate?: string;
	datetime_in?: string;
	datetime_out?: string;
	amount?: number;
	parking_rates: pgdb_parking_ratesCreateNestedOneWithoutParking_transactionsInput;
}

export interface pgdb_parking_ratesCreateNestedOneWithoutParking_transactionsInput {
	create?: pgdb_parking_ratesCreateWithoutParking_transactionsInput;
	connectOrCreate?: pgdb_parking_ratesCreateOrConnectWithoutParking_transactionsInput;
	connect?: pgdb_parking_ratesWhereUniqueInput;
}

export interface pgdb_parking_ratesCreateWithoutParking_transactionsInput {
	id?: string;
	created_at?: string;
	min_hours?: number;
	min_amount?: number;
	variable_amount?: number;
	is_active?: boolean;
	vehicle_types?: pgdb_vehicle_typesCreateNestedOneWithoutParking_ratesInput;
}

export interface pgdb_vehicle_typesCreateNestedOneWithoutParking_ratesInput {
	create?: pgdb_vehicle_typesCreateWithoutParking_ratesInput;
	connectOrCreate?: pgdb_vehicle_typesCreateOrConnectWithoutParking_ratesInput;
	connect?: pgdb_vehicle_typesWhereUniqueInput;
}

export interface pgdb_vehicle_typesCreateWithoutParking_ratesInput {
	id?: string;
	created_at?: string;
	code?: string;
	description?: string;
}

export interface pgdb_vehicle_typesCreateOrConnectWithoutParking_ratesInput {
	where?: pgdb_vehicle_typesWhereUniqueInput;
	create?: pgdb_vehicle_typesCreateWithoutParking_ratesInput;
}

export interface pgdb_vehicle_typesWhereUniqueInput {
	id?: string;
}

export interface pgdb_parking_ratesCreateOrConnectWithoutParking_transactionsInput {
	where?: pgdb_parking_ratesWhereUniqueInput;
	create?: pgdb_parking_ratesCreateWithoutParking_transactionsInput;
}

export interface pgdb_parking_ratesWhereUniqueInput {
	id?: string;
}

export interface pgdb_parking_transactionsUpdateInput {
	id?: pgdb_BigIntFieldUpdateOperationsInput;
	created_at?: pgdb_DateTimeFieldUpdateOperationsInput;
	vehicle_plate?: pgdb_StringFieldUpdateOperationsInput;
	datetime_in?: pgdb_DateTimeFieldUpdateOperationsInput;
	datetime_out?: pgdb_NullableDateTimeFieldUpdateOperationsInput;
	amount?: pgdb_NullableIntFieldUpdateOperationsInput;
	parking_rates?: pgdb_parking_ratesUpdateOneRequiredWithoutParking_transactionsInput;
}

export interface pgdb_BigIntFieldUpdateOperationsInput {
	set?: string;
	increment?: string;
	decrement?: string;
	multiply?: string;
	divide?: string;
}

export interface pgdb_DateTimeFieldUpdateOperationsInput {
	set?: string;
}

export interface pgdb_StringFieldUpdateOperationsInput {
	set?: string;
}

export interface pgdb_NullableDateTimeFieldUpdateOperationsInput {
	set?: string;
}

export interface pgdb_NullableIntFieldUpdateOperationsInput {
	set?: number;
	increment?: number;
	decrement?: number;
	multiply?: number;
	divide?: number;
}

export interface pgdb_parking_ratesUpdateOneRequiredWithoutParking_transactionsInput {
	create?: pgdb_parking_ratesCreateWithoutParking_transactionsInput;
	connectOrCreate?: pgdb_parking_ratesCreateOrConnectWithoutParking_transactionsInput;
	upsert?: pgdb_parking_ratesUpsertWithoutParking_transactionsInput;
	connect?: pgdb_parking_ratesWhereUniqueInput;
	update?: pgdb_parking_ratesUpdateWithoutParking_transactionsInput;
}

export interface pgdb_parking_ratesUpsertWithoutParking_transactionsInput {
	update?: pgdb_parking_ratesUpdateWithoutParking_transactionsInput;
	create?: pgdb_parking_ratesCreateWithoutParking_transactionsInput;
}

export interface pgdb_parking_ratesUpdateWithoutParking_transactionsInput {
	id?: pgdb_BigIntFieldUpdateOperationsInput;
	created_at?: pgdb_NullableDateTimeFieldUpdateOperationsInput;
	min_hours?: pgdb_NullableIntFieldUpdateOperationsInput;
	min_amount?: pgdb_NullableIntFieldUpdateOperationsInput;
	variable_amount?: pgdb_NullableIntFieldUpdateOperationsInput;
	is_active?: pgdb_BoolFieldUpdateOperationsInput;
	vehicle_types?: pgdb_vehicle_typesUpdateOneWithoutParking_ratesInput;
}

export interface pgdb_BoolFieldUpdateOperationsInput {
	set?: boolean;
}

export interface pgdb_vehicle_typesUpdateOneWithoutParking_ratesInput {
	create?: pgdb_vehicle_typesCreateWithoutParking_ratesInput;
	connectOrCreate?: pgdb_vehicle_typesCreateOrConnectWithoutParking_ratesInput;
	upsert?: pgdb_vehicle_typesUpsertWithoutParking_ratesInput;
	disconnect?: boolean;
	delete?: boolean;
	connect?: pgdb_vehicle_typesWhereUniqueInput;
	update?: pgdb_vehicle_typesUpdateWithoutParking_ratesInput;
}

export interface pgdb_vehicle_typesUpsertWithoutParking_ratesInput {
	update?: pgdb_vehicle_typesUpdateWithoutParking_ratesInput;
	create?: pgdb_vehicle_typesCreateWithoutParking_ratesInput;
}

export interface pgdb_vehicle_typesUpdateWithoutParking_ratesInput {
	id?: pgdb_BigIntFieldUpdateOperationsInput;
	created_at?: pgdb_NullableDateTimeFieldUpdateOperationsInput;
	code?: pgdb_NullableStringFieldUpdateOperationsInput;
	description?: pgdb_NullableStringFieldUpdateOperationsInput;
}

export interface pgdb_NullableStringFieldUpdateOperationsInput {
	set?: string;
}

export interface pgdb_parking_transactionsWhereUniqueInput {
	id?: string;
	vehicle_plate?: string;
}

export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };
import type { GraphQLError } from "@wundergraph/sdk/client";

export interface ParkingParkingTransactionsInput {
	where: pgdb_parking_transactionsWhereInput;
}

export interface ParkingVehicleTypesInput {
	where?: pgdb_vehicle_typesWhereInput;
}

export interface Parking__OldVehicleTypeCodeIdInput {
	vehicleCode?: string;
}

export interface ParkingMutationsCreateOneParkingTransactionInput {
	data: pgdb_parking_transactionsCreateInput;
}

export interface ParkingMutationsUpdateOneParkingTransactionInput {
	data: pgdb_parking_transactionsUpdateInput;
	where: pgdb_parking_transactionsWhereUniqueInput;
}

export interface ParkingQueriesParkingRatesAndRelationsInput {
	where: pgdb_parking_ratesWhereInput;
}

export interface ParkingQueriesParkingTransactionsAndRelationsInput {
	where: pgdb_parking_transactionsWhereInput;
}

export type ParkingMutationsFinishParkingInput = ExtractInput<typeof function_ParkingMutationsFinishParking>;

export type ParkingMutationsStartParkingInput = ExtractInput<typeof function_ParkingMutationsStartParking>;

export type UsersGetInput = ExtractInput<typeof function_UsersGet>;

export type UsersSubscribeInput = ExtractInput<typeof function_UsersSubscribe>;

export type UsersUpdateInput = ExtractInput<typeof function_UsersUpdate>;

export interface InternalParkingParkingTransactionsInput {
	where: pgdb_parking_transactionsWhereInput;
}

export interface InternalParkingVehicleTypesInput {
	where?: pgdb_vehicle_typesWhereInput;
}

export interface InternalParking__OldVehicleTypeCodeIdInput {
	vehicleCode?: string;
}

export interface InternalParkingMutationsCreateOneParkingTransactionInput {
	data: pgdb_parking_transactionsCreateInput;
}

export interface InternalParkingMutationsUpdateOneParkingTransactionInput {
	data: pgdb_parking_transactionsUpdateInput;
	where: pgdb_parking_transactionsWhereUniqueInput;
}

export interface InternalParkingQueriesParkingRatesAndRelationsInput {
	where: pgdb_parking_ratesWhereInput;
}

export interface InternalParkingQueriesParkingTransactionsAndRelationsInput {
	where: pgdb_parking_transactionsWhereInput;
}

export interface InternalParkingMutationsFinishParkingInput {
	parkingTransactionId: string;
}

export interface InternalParkingMutationsStartParkingInput {
	vehicleCode: string;
}

export interface InternalUsersGetInput {
	id: string;
}

export interface InternalUsersSubscribeInput {
	id: string;
}

export interface InternalUsersUpdateInput {
	id: string;
	name: string;
	bio: string;
}

export interface InjectedParkingParkingTransactionsInput {
	where: pgdb_parking_transactionsWhereInput;
}

export interface InjectedParkingVehicleTypesInput {
	where?: pgdb_vehicle_typesWhereInput;
}

export interface InjectedParking__OldVehicleTypeCodeIdInput {
	vehicleCode?: string;
}

export interface InjectedParkingMutationsCreateOneParkingTransactionInput {
	data: pgdb_parking_transactionsCreateInput;
}

export interface InjectedParkingMutationsUpdateOneParkingTransactionInput {
	data: pgdb_parking_transactionsUpdateInput;
	where: pgdb_parking_transactionsWhereUniqueInput;
}

export interface InjectedParkingQueriesParkingRatesAndRelationsInput {
	where: pgdb_parking_ratesWhereInput;
}

export interface InjectedParkingQueriesParkingTransactionsAndRelationsInput {
	where: pgdb_parking_transactionsWhereInput;
}

export interface DragonsResponse {
	data?: DragonsResponseData;
	errors?: GraphQLError[];
}

export interface ParkingParkingTransactionsResponse {
	data?: ParkingParkingTransactionsResponseData;
	errors?: GraphQLError[];
}

export interface ParkingVehicleTypesResponse {
	data?: ParkingVehicleTypesResponseData;
	errors?: GraphQLError[];
}

export interface Parking__OldVehicleTypeCodeIdResponse {
	data?: Parking__OldVehicleTypeCodeIdResponseData;
	errors?: GraphQLError[];
}

export interface Parking__OldVehicleTypesAllResponse {
	data?: Parking__OldVehicleTypesAllResponseData;
	errors?: GraphQLError[];
}

export interface ParkingMutationsCreateOneParkingTransactionResponse {
	data?: ParkingMutationsCreateOneParkingTransactionResponseData;
	errors?: GraphQLError[];
}

export interface ParkingMutationsUpdateOneParkingTransactionResponse {
	data?: ParkingMutationsUpdateOneParkingTransactionResponseData;
	errors?: GraphQLError[];
}

export interface ParkingQueriesParkingRatesAndRelationsResponse {
	data?: ParkingQueriesParkingRatesAndRelationsResponseData;
	errors?: GraphQLError[];
}

export interface ParkingQueriesParkingTransactionsAndRelationsResponse {
	data?: ParkingQueriesParkingTransactionsAndRelationsResponseData;
	errors?: GraphQLError[];
}

export interface ParkingMutationsFinishParkingResponse {
	data?: ParkingMutationsFinishParkingResponseData;
	errors?: GraphQLError[];
}

export interface ParkingMutationsStartParkingResponse {
	data?: ParkingMutationsStartParkingResponseData;
	errors?: GraphQLError[];
}

export interface UsersGetResponse {
	data?: UsersGetResponseData;
	errors?: GraphQLError[];
}

export interface UsersSubscribeResponse {
	data?: UsersSubscribeResponseData;
	errors?: GraphQLError[];
}

export interface UsersUpdateResponse {
	data?: UsersUpdateResponseData;
	errors?: GraphQLError[];
}

export interface DragonsResponseData {
	spacex_dragons?: {
		name?: string;
		active?: boolean;
		id?: string;
	}[];
}

export interface ParkingParkingTransactionsResponseData {
	pgdb_findManyparking_transactions: {
		id: string;
		created_at: string;
		vehicle_plate: string;
		datetime_in: string;
		datetime_out?: string;
		amount?: number;
		parking_rate: string;
	}[];
}

export interface ParkingVehicleTypesResponseData {
	pgdb_findManyvehicle_types: {
		id: string;
		code?: string;
		description?: string;
	}[];
}

export interface Parking__OldVehicleTypeCodeIdResponseData {
	pgdb_findFirstvehicle_types?: {
		id: string;
		code?: string;
		description?: string;
	};
}

export interface Parking__OldVehicleTypesAllResponseData {
	pgdb_findManyvehicle_types: {
		id: string;
		code?: string;
		description?: string;
	}[];
}

export interface ParkingMutationsCreateOneParkingTransactionResponseData {
	pgdb_createOneparking_transactions?: {
		amount?: number;
		vehicle_plate: string;
		datetime_in: string;
		datetime_out?: string;
	};
}

export interface ParkingMutationsUpdateOneParkingTransactionResponseData {
	pgdb_updateOneparking_transactions?: {
		id: string;
		created_at: string;
		vehicle_plate: string;
		datetime_in: string;
		datetime_out?: string;
		amount?: number;
		parking_rate: string;
	};
}

export interface ParkingQueriesParkingRatesAndRelationsResponseData {
	pgdb_findManyparking_rates: {
		id: string;
		created_at?: string;
		min_hours?: number;
		min_amount?: number;
		variable_amount?: number;
		is_active: boolean;
		vehicle_types?: {
			id: string;
			code?: string;
			description?: string;
		};
	}[];
}

export interface ParkingQueriesParkingTransactionsAndRelationsResponseData {
	pgdb_findManyparking_transactions: {
		id: string;
		created_at: string;
		vehicle_plate: string;
		datetime_in: string;
		datetime_out?: string;
		amount?: number;
		parking_rates: {
			min_hours?: number;
			min_amount?: number;
			variable_amount?: number;
		};
	}[];
}

export type ParkingMutationsFinishParkingResponseData = ExtractResponse<typeof function_ParkingMutationsFinishParking>;

export type ParkingMutationsStartParkingResponseData = ExtractResponse<typeof function_ParkingMutationsStartParking>;

export type UsersGetResponseData = ExtractResponse<typeof function_UsersGet>;

export type UsersSubscribeResponseData = ExtractResponse<typeof function_UsersSubscribe>;

export type UsersUpdateResponseData = ExtractResponse<typeof function_UsersUpdate>;
