import Joi from "joi";

export const registerSchema = Joi.object({
    name: Joi.string().min(2).max(256).required()           
      
        ,

    phone: Joi.string()
        .ruleset.regex(/^0[2-9]\d{7,8}$/)

        .rule({ message: 'user "phone" mast be a valid phone number' })
        .required(),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
    password: Joi.string()
        .ruleset.regex(
            /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
        )
        .rule({
            message:
                'user "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
        })
        .required(),
    image: Joi.object()
        .keys({
            url: Joi.string()
                .ruleset.regex(
                    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
                )
                .rule({ message: "user image mast be a valid url" })
                .allow(""),
            alt: Joi.string().min(2).max(256).allow(""),
        })
        .required(),
    address: Joi.object()
        .keys({
            state: Joi.string().allow(""),
            country: Joi.string().required(),
            city: Joi.string().required(),
            street: Joi.string().required(),
            houseNumber: Joi.number().required(),
            zip: Joi.number(),
        })
        .required(),
    isBusiness: Joi.boolean().required(),
    isAdmin: Joi.boolean().allow(""),
});   