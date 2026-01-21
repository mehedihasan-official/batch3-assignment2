"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateRequest = (schema) => (req, res, next) => {
    schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
    });
    next();
};
exports.default = validateRequest;
//# sourceMappingURL=validateRequest.js.map