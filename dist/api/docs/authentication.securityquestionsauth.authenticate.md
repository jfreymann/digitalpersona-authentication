<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@digitalpersona/authentication](./authentication.md) &gt; [SecurityQuestionsAuth](./authentication.securityquestionsauth.md) &gt; [authenticate](./authentication.securityquestionsauth.authenticate.md)

## SecurityQuestionsAuth.authenticate() method

Authenticates the user using user's answers to security questions.

<b>Signature:</b>

```typescript
authenticate(identity: User | JSONWebToken, answers: Answers): Promise<JSONWebToken>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  identity | <code>User &#124; JSONWebToken</code> | a  or a JSON Web Token. |
|  answers | <code>Answers</code> | user's answers to security questions. |

<b>Returns:</b>

`Promise<JSONWebToken>`

a promise to return a JSON Web Token containing a claim (`crd`<!-- -->) showing the fact a Security Questions were used. Will reject if authentication fails.

## Remarks

If the `identity` parameter is a user name, a new token will be created. If the `identity` parameter is a JSON Web Token, an updated token will be returned.

