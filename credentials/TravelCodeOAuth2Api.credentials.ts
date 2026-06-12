import type { Icon, ICredentialType, INodeProperties } from 'n8n-workflow';

export class TravelCodeOAuth2Api implements ICredentialType {
	name = 'travelCodeOAuth2Api';

	extends = ['oAuth2Api'];

	displayName = 'Travel Code OAuth2 API';

	icon: Icon = 'file:../nodes/TravelCode/travelcode.svg';

	documentationUrl = 'https://apidocs.travel-code.com';

	properties: INodeProperties[] = [
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'pkce',
		},
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'hidden',
			default: 'https://travel-code.com/oauth/authorize',
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden',
			default: 'https://travel-code.com/oauth/token',
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: 'airports:read airlines:read flights:search flights:status flights:stats',
		},
		{
			displayName: 'Auth URI Query Parameters',
			name: 'authQueryParameters',
			type: 'hidden',
			default: '',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'header',
		},
	];
}
