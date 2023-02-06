import type { OAuthConfig, OAuthUserConfig } from ".";
interface Identifier {
    identifier: string;
}
interface Element {
    identifiers?: Identifier[];
}
export interface LinkedInProfile {
    id: string;
    localizedFirstName: string;
    localizedLastName: string;
    profilePicture: {
        "displayImage~": {
            elements?: Element[];
        };
    };
}
export default function LinkedIn<P extends Record<string, any> = LinkedInProfile>(options: OAuthUserConfig<P>): OAuthConfig<P>;
export {};
