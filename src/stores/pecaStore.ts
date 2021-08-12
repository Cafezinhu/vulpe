import {writable} from 'svelte/store';

export const corpoStore = writable(0);
export const chapeuStore = writable(0);


const perigo = writable(false);

function createPernas ()
{
    const {subscribe, set, update} = writable(0);

    return{
        subscribe,
        set: (i: number) => {
            perigo.update(value => {
                if(i === 0 && value === true)
                {
                    return value;
                }
                set(i);
                return value;
            });
        },
        update
    }
}

export const pernasStore = createPernas();

function createTorso()
{
    const {subscribe, set} = writable(0);

    return {
        subscribe,
        set: (i: number) => {
            if(i >= 13) 
            {
                set(i);
                pernasStore.update(value => {
                    if(value === 0) return 1;
                    return value;
                });
                perigo.set(true);
                return;
            }
            set(i);
            perigo.set(false);
        }
    }
}

export const torsoStore = createTorso();

export const olhosStore = writable(0);
export const bochechasStore = writable(0);
export const narizStore = writable(0);
export const sobrancelhasStore = writable(0);
export const bocaStore = writable(0);
export const meiasStore = writable(0);
export const asasStore = writable(0);
export const oculosStore = writable(0);
export const luvasStore = writable(0);
export const agasalhoStore = writable(0);
export const orelhasStore = writable(1);
export const franjaStore = writable(1);
export const cabeloStore = writable(1);
export const sapatosStore = writable(1);
export const raboStore = writable(1);