import { kanyeInstance } from '../../../axios';

export async function executeKanye() {
    let response = await kanyeInstance.get('');
    return response.data;
}