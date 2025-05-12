import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import UnifiedVault from './components/UnifiedVault';
import CentralVault from './components/CentalVault';
import PrivateVault from './components/PrivateVault';
import VaultDetail from './components/VaultDetails/CentralVault/HugeRuby';
import HugeRuby from './components/VaultDetails/CentralVault/HugeRuby';
import { ActiveProvider } from './components/ActiveContext';
import StarRuby from './components/VaultDetails/CentralVault/StarRuby';
import Jade from './components/VaultDetails/CentralVault/Jade';
import UnifiedVaultJade from './components/VaultDetails/UnifiedVault/UnifiedVaultJade';
import UnifiedVaultRoundedJade from './components/VaultDetails/UnifiedVault/UnifiedVault_RounedJade';
import UnifiedVaultWearJade from './components/VaultDetails/UnifiedVault/UnifiedVault_Wear';
import Stake from './components/Stake';
import Swap from './components/Swap';
import PrimaryDerivative from './components/PrimaryDerivative';
import Locker from './components/Locker';
import AuctionDetails from './components/AuctionDetails';
import Auction from './components/Auction';
import BIF from './components/BIF';
import BuySideVaults from './components/BuySideVaults';
import LSD from './components/LSD';
import Convertor from './components/Convertor';
import Bond from './components/Bond';
import Strategy from './components/Strategy';
import Pools from './components/Pools';
import MultiTokensPools from './components/MTPools';
import MTPoolsDetail from './components/MTPoolsDetail';
import Bonds from './components/Bonds';
import Vote from './components/Vote';

function App() {
  return (
    <div className="App">
      <ActiveProvider>
        <Router>
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <CentralVault />
              </>
              } />

              <Route path="/unified-vault" element={
                <>
                  <Navbar />
                  <UnifiedVault />
                </>
                } />

              <Route path="/private-vault" element={
                <>
                  <Navbar />
                  <PrivateVault />
                </>
              } />

              <Route path="/vault-details-ruby" element={
                <>
                  <Navbar />
                  <HugeRuby />
                </>
              } />

              <Route path="/star-ruby" element={
                <>
                  <Navbar />
                  <StarRuby />
                </>
              } />

              <Route path="/burmese-jade" element={
                <>
                  <Navbar />
                  <Jade />
                </>
              } />

              <Route path="/unified-vault-jade" element={
                <>
                  <Navbar />
                  <UnifiedVaultJade />
                </>
              } />

              <Route path="/unified-vault-rounded-jade" element={
                <>
                  <Navbar />
                  <UnifiedVaultRoundedJade />
                </>
              } />

              <Route path="/unified-vault-jade-jewellery" element={
                <>
                  <Navbar />
                  <UnifiedVaultWearJade />
                </>
              } />

              <Route path="/stake" element={
                <>
                  <Navbar />
                  <Stake />
                </>
              } />

              <Route path="/swap" element={
                <>
                  <Navbar />
                  <Swap />
                </>
              } />

              <Route path="/pd" element={
                <>
                  <Navbar />
                  <PrimaryDerivative />
                </>
              } />

              <Route path="/locker" element={
                <>
                  <Navbar />
                  <Locker />
                </>
              } />

              <Route path="/auction" element={
                <>
                  <Navbar />
                  <Auction />
                </>
              } />

              <Route path="/auction-star-ruby" element={
                <>
                  <Navbar />
                  <AuctionDetails />
                </>
              } />

              <Route path="/bif" element={
                <>
                  <Navbar />
                  <BIF />
                </>
              } />

              <Route path="/buyside-vaults" element={
                <>
                  <Navbar />
                  <BuySideVaults />
                </>
              } />

              <Route path="/lsd" element={
                <>
                  <Navbar />
                  <LSD />
                </>
              } />

              <Route path="/convertor" element={
                <>
                  <Navbar />
                  <Convertor />
                </>
              } />

              {/* <Route path="/bond" element={
                <>
                  <Navbar />
                  <Bond />
                </>
              } /> */}

              <Route path="/strategy" element={
                <>
                  <Navbar />
                  <Strategy />
                </>
              } />

              <Route path="/strategic-pool" element={
                <>
                  <Navbar />
                  <Pools />
                </>
              } />

              <Route path="/multi-token-pools" element={
                <>
                  <Navbar />
                  <MultiTokensPools />
                </>
              } />

              <Route path="/multi-token-pools-details" element={
                <>
                  <Navbar />
                  <MTPoolsDetail />
                </>
              } />

              <Route path="/bonds" element={
                <>
                  <Navbar />
                  <Bonds />
                </>
              } />

              <Route path="/vote" element={
                <>
                  <Navbar />
                  <Vote />
                </>
              } />
            </Routes>
        </Router>
      </ActiveProvider>
    </div>
  );
}

export default App;
