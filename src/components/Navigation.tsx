import * as React from 'react';

import ConnectButton from './ConnectButton';
import styled from 'styled-components'
import Blockie from './Blockie'
import { ellipseAddress, getChainData } from '../helpers/utilities';
import { transitions } from '../styles'
import { Link } from "react-router-dom";
import Logo from './Logo';

const SHeader = styled.div`
  margin-top: -1px;
  margin-bottom: 1px;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`

const SActiveAccount = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  font-weight: 500;
`

const SActiveChain = styled(SActiveAccount)`
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  & p {
    font-size: 0.8em;
    margin: 0;
    padding: 0;
  }
  & p:nth-child(2) {
    font-weight: bold;
  }
`

const SBlockie = styled(Blockie)`
  margin-right: 10px;
`

interface IHeaderStyle {
  connected: boolean
}

const SAddress = styled.p<IHeaderStyle>`
  color: #000000;
  transition: ${transitions.base};
  font-weight: bold;
  margin: ${({ connected }) => (connected ? '-2px auto 0.7em' : '0')};
`

const SDisconnect = styled.div<IHeaderStyle>`
  transition: ${transitions.button};
  color: #000000;
  font-size: 12px;
  font-family: monospace;
  position: absolute;
  right: 0;
  top: 20px;
  opacity: 0.7;
  cursor: pointer;
  opacity: ${({ connected }) => (connected ? 1 : 0)};
  visibility: ${({ connected }) => (connected ? 'visible' : 'hidden')};
  pointer-events: ${({ connected }) => (connected ? 'auto' : 'none')};
  &:hover {
    transform: translateY(-1px);
    opacity: 0.5;
  }
`

interface INavigationProps {
  killSession: () => void
  onConnect : () => void
  connected: boolean
  address: string
  chainId: number
}


const Navigation = (props: INavigationProps) => {
  const { connected, address, chainId, killSession, onConnect } = props
  const chainData = chainId ? getChainData(chainId) : null

  return (
    <div className="nav-container">
      <header>
            <nav>
                <ul>
                <Logo />
                    {/* <li>Explore</li> */}
                    
                    <li><Link to="/fraction">Fractionalize</Link> </li>
                    {/* <Link to="/explore">Explore</Link> */}
                    <Link to="/mint">Mint</Link>
                    
                    { connected && address ? (
                        <SActiveAccount>
                          <SBlockie address={address} />
                          <SAddress connected={connected}>{ellipseAddress(address)}</SAddress>
                            <SDisconnect connected={connected} onClick={killSession}>
                              {'Disconnect'}
                            </SDisconnect>
                       </SActiveAccount>
                    ) : 
                      <ConnectButton onClick={onConnect} />
                    }
                </ul>
            </nav>
        </header>
      </div>
    );
}
export default Navigation;
