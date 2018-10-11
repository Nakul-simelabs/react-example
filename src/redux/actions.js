export const DATA_ACTIONS = {

    // action types
    API_CALL_REQUEST: "API_CALL_REQUEST",
    API_CALL_SUCCESS: "API_CALL_SUCCESS",
    API_CALL_FAILURE: "API_CALL_FAILURE",
    MODAL_DISPLAY:'modal_dispay',
    MODAL_SUCCESS:'MODEL_SUCEESS',
    MODAL_HIDE:'modal hide ',
    get_data: (data) => {
        return {
            type: DATA_ACTIONS.API_CALL_REQUEST,
            data
        }
    },
    do_login: (data) => {
        return {
            type: DATA_ACTIONS.API_CALL_REQUEST,
            data,
            url: "google.com"
        }
    },
    showModal:(data)=>{
        return {
            type: DATA_ACTIONS.MODAL_DISPLAY,
            visible: data
        }
    },
    hideModal:(data)=>{
        return {
            type: DATA_ACTIONS.MODAL_HIDE,
            visible: data
        }
    }
}

