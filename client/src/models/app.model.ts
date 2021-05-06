
export interface UserModel{
    id?: string;
    lastname: string;
    firstname: string;
    email: string;
    phone: string;
    address: string;
};

export interface PostModel{
    id?: string;
    title: string;
    content: string;
    createdAt: Date;
    status: "public" | "private";
    media: string;
    user: string | UserModel;
    thumbup?: number;
    thumbDown?: number;
};

export interface CommentModel{
    id?: string;
    post: string | PostModel;
    body: string;
    createdAt: Date;
    thumbup?: number;
    thumbDown?: number;
};

export interface ReplyModel{
    comment: string | CommentModel;
    body: string;
    createAt: Date;
    thumbup?: number;
    thumbDown?: number;
};