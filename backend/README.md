# TradeMaster Backend

This folder is reserved for the backend service of TradeMaster.

At the moment, no server implementation is included here. The frontend dashboard currently expects an API endpoint at:

```text
POST http://localhost:3002/newOrder
```

## Suggested Responsibilities

- Order creation and storage
- Holdings and positions APIs
- Funds and account summary APIs
- Authentication and user management
- Market data integration

## Suggested Next Step

Create a Node.js or Express service in this folder and connect it to the dashboard so the buy flow works end-to-end.
