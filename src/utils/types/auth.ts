export interface IAuthState {
    uid:null|string;
};

export interface AuthContextType {
    user: IAuthState | null;
    login: (user_data: IAuthState) => Promise<boolean>;
    signout:() => Promise<boolean>;
}