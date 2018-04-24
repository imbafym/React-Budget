

export const SHOW_DATA = 'show_data';

export function show_data(data) {
    return {
        type: SHOW_DATA,
        payload: data
    }
}