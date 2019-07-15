<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@digitalpersona/authentication](./authentication.md) &gt; [ContactlessCardAuth](./authentication.contactlesscardauth.md) &gt; [authenticate](./authentication.contactlesscardauth.authenticate.md)

## ContactlessCardAuth.authenticate() method

Authenticates the user using a contactless card.

<b>Signature:</b>

```typescript
authenticate(identity: User | JSONWebToken, cardData: string): Promise<JSONWebToken>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  identity | <code>User &#124; JSONWebToken</code> | a  or a JSON Web Token. |
|  cardData | <code>string</code> | card authentication data received from the card using a <code>CardsReader.getCardAuthData</code>. |

<b>Returns:</b>

`Promise<JSONWebToken>`

a promise to return a JSON Web Token containing a claim (`crd`<!-- -->) showing the fact a contactless card was used. Will reject if authentication fails.

## Remarks

If the `identity` parameter is a user name, a new token will be created. If the `identity` parameter is a JSON Web Token, an updated token will be returned.
