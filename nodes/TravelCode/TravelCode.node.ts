import type { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';

export class TravelCode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Travel Code',
		name: 'travelCode',
		icon: 'file:travelcode.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Travel Code corporate travel platform',
		defaults: {
			name: 'Travel Code',
		},
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'travelCodeOAuth2Api',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.travel-code.com',
			headers: {
				Accept: 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Reference Data',
						value: 'data',
					},
					{
						name: 'User',
						value: 'user',
					},
				],
				default: 'data',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['data'],
					},
				},
				options: [
					{
						name: 'List Airlines',
						value: 'listAirlines',
						action: 'List airlines',
						description: 'Get the list of supported airlines (IATA, name)',
						routing: {
							request: {
								method: 'GET',
								url: '/v1/data/airlines',
							},
						},
					},
					{
						name: 'List Airports',
						value: 'listAirports',
						action: 'List airports',
						description: 'Get the list of supported airports (IATA, city, country)',
						routing: {
							request: {
								method: 'GET',
								url: '/v1/data/airports',
							},
						},
					},
				],
				default: 'listAirports',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['user'],
					},
				},
				options: [
					{
						name: 'Get Current User',
						value: 'getCurrentUser',
						action: 'Get current user',
						description: 'Get the profile of the authenticated user',
						routing: {
							request: {
								method: 'GET',
								url: '/v1/user/me',
							},
						},
					},
				],
				default: 'getCurrentUser',
			},
		],
		usableAsTool: true,
	};
}
