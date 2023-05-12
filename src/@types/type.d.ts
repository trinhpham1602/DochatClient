declare module Type {
  type UserAccessPermission = 'member' | 'admin' | 'super_user' | 'shipper';

  type User = {
    uuid: string;
    nickName: string;
    fullName: string;
    avatarURL: string;
    joinedAt: Date;
    address: string;
  };
  type Me = User & {
    accessPermission: UserAccessPermission;
    hasNewPostTheme: number;
    loginTimes: number;
    authorities: {
      admin: string[];
      readMotivationAnalytics: string[];
      readPersonalInformation: boolean;
      readUsageCheck: string[];
    };
    owner?: {
      uuid: string;
      type?: string;
      credoTitle?: string;
      credoSubTitle?: string;
      credoItemCount?: string;
    };
  };
}
