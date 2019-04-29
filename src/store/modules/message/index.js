import * as actions from "./actions";
import * as getters from "./getters";
import stateMutation from "./state-mutation";
export default {
    namespaced: true,
    actions,
    getters,
    ...stateMutation
}