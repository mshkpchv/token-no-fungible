import { createContext, useContext } from 'react';

export interface IConnectedContext {
    connected:boolean;
    // setConnected?: () => void;
    address : string;
    // setAddress?: () => void ;
    library: object,
    // setLibrary : () => void;
}

export const defaultPropsIConnectedContext = {
    connected : false,
    // setConnected : () => {},
    address : '',
    // setAddress : () => {},
    library : {},
    // setLibrary : () => {}

}
export const ConnectedContext = createContext<IConnectedContext>(defaultPropsIConnectedContext);
export const useConnectedContext = () => useContext(ConnectedContext);

export const SelectedNFTContext = createContext({ card: undefined, onChange: () => {console.log('selectedCardContext')} });
export const useSelectedNFTContext = () => useContext(SelectedNFTContext);