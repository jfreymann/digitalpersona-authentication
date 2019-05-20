import { User, JSONWebToken, BioSample, Face } from '@digitalpersona/core';
import { IAuthService } from '@digitalpersona/services';
import { Authenticator } from '../../private';

export class FaceAuth extends Authenticator
{
    constructor(authService: IAuthService){
        super(authService)
    }

    public authenticate(identity: User|JSONWebToken, samples: BioSample[]) {
        return super._authenticate(identity,  new Face(samples));
    }

    public identify(samples: BioSample[]): Promise<JSONWebToken> {
        return super._identify(new Face(samples));
    }
}
