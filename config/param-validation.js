import Joi from 'joi';

const userValidation = {
    createUser: {
        body: {
            username: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        },
    },
    updateUser: {
        body: {
            email: Joi.string().email(),
        },
    },
    updateUserScopes: {
        body: {
            scopes: Joi.array().unique().items(Joi.string().allow('')).required(),
        },
    },
};

const authValidation = {
    updatePassword: {
        body: {
            oldPassword: Joi.string().required(),
            password: Joi.string().required(),
        },
    },
    refreshToken: {
        body: {
            username: Joi.string().required(),
            refreshToken: Joi.string().required(),
        },
    },
    refreshTokenReject: {
        body: {
            refreshToken: Joi.string().required(),
        },
    },
    resetToken: {
        body: {
            email: Joi.string().email().required(),
        },
    },
    resetPassword: {
        body: {
            password: Joi.string().required(),
        },
    },
    login: {
        body: {
            username: Joi.string().required(),
            password: Joi.string().required(),
        },
    },
};

export default {
    userValidation,
    authValidation,
};
