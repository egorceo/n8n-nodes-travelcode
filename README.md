# n8n-nodes-travelcode

n8n community node for [Travel Code](https://travel-code.com) — corporate travel booking and management (flights, hotels, rail, transfers, orders).

## Installation

Follow the [n8n community nodes installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) and install `n8n-nodes-travelcode`.

## Credentials

Travel Code uses **OAuth 2.0 with PKCE**.

1. Register an OAuth client (returns a client ID):

   ```bash
   curl -X POST "https://travel-code.com/oauth/register" \
     -H "Content-Type: application/json" \
     -d '{"client_name": "My n8n", "redirect_uris": ["<your n8n OAuth callback URL>"]}'
   ```

2. In n8n, create **Travel Code OAuth2 API** credentials with the client ID and connect your account.

Confidential client credentials are available from your Travel Code account manager.

## Operations

- **Reference Data**: List Airports, List Airlines
- **User**: Get Current User

## Resources

- [Travel Code API documentation](https://apidocs.travel-code.com/)
