import React from 'react';
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import {
    CardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardIcon,
    CardFieldset,
    CardInput,
    CardOptionsItem,
    CardOptions,
    CardOptionsNote,
    CardButton,
    CardLink
} from './styles';

export const LoginCard = () => {
    return (
        <>
            <CardWrapper>
                <CardHeader>
                    <CardHeading>Sign in</CardHeading>
                </CardHeader>

                <CardBody>
                    <CardFieldset>
                        <CardInput placeholder="Username" type="text" required />
                    </CardFieldset>

                    <CardFieldset>
                        <CardInput placeholder="E-mail" type="text" required />
                    </CardFieldset>

                    <CardFieldset>
                        <CardInput placeholder="Password" type="password" required />
                        <CardIcon className="fa fa-eye" />
                    </CardFieldset>

                    <CardFieldset>
                        <CardOptionsNote>Or sign up with</CardOptionsNote>

                        <CardOptions>
                            <CardOptionsItem>
                                <FcGoogle />
                            </CardOptionsItem>

                            <CardOptionsItem>
                                <FaFacebook />
                            </CardOptionsItem>
                        </CardOptions>
                    </CardFieldset>

                    <CardFieldset>
                        <CardButton type="button">Sign Up</CardButton>
                    </CardFieldset>

                    <CardFieldset>
                        <CardLink>I already have an account</CardLink>
                    </CardFieldset>
                </CardBody>
            </CardWrapper>
        </>
    )
}
