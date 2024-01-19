import { $request } from "./";

export const api_test = function (data) {
    return $request.post("/", data);
};
