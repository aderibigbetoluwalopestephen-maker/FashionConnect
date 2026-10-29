import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, BadgeCheck, Check, ChevronDown, Heart, MapPin, Menu, Search, ShieldCheck, Shirt, Sparkles, Star, X } from 'lucide-react';

const designers = [
  { id: 1, name: 'Amara Atelier', location: 'Lagos, Lagos State', specialty: 'Traditional & Aso-ebi', price: 35000, rating: '4.9', reviews: 42, image: 'photo-1539109136881-3be0616acf4b', tag: 'Popular choice', initials: 'AA' },
  { id: 2, name: 'Thread & Form', location: 'Ibadan, Oyo State', specialty: 'Ready-to-wear', price: 18000, rating: '4.8', reviews: 28, image: 'photo-1534528741775-53994a69daeb', tag: 'Rising designer', initials: 'TF' },
  { id: 3, name: 'House of Zainab', location: 'Abuja, FCT', specialty: 'Bridal & Occasion', price: 65000, rating: '5.0', reviews: 19, image: 'photo-1539008835657-9e8e9680c956', tag: 'Top rated', initials: 'HZ' },
  { id: 4, name: 'Oma Signature', location: 'Enugu, Enugu State', specialty: 'Modern African wear', price: 25000, rating: '4.9', reviews: 31, image: 'photo-1529139574466-a303027c1d8b', tag: 'Client favourite', initials: 'OS' },
  { id: 5, name: 'The Sew Studio', location: 'Lagos, Lagos State', specialty: 'Corporate & Casual', price: 15000, rating: '4.7', reviews: 16, image: 'photo-1483985988355-763728e1935b', tag: 'Great value', initials: 'SS' },
  { id: 6, name: 'Kiki Couture', location: 'Port Harcourt, Rivers', specialty: 'Bridal & Occasion', price: 55000, rating: '4.9', reviews: 24, image: 'photo-1525507119028-ed4c629a60a3', tag: 'Made to measure', initials: 'KC' }
];

const specialties = ['All styles', 'Traditional & Aso-ebi', 'Ready-to-wear', 'Bridal & Occasion', 'Modern African wear', 'Corporate & Casual'];
const money = (value) => '₦' + value.toLocaleString('en-NG');

function App() {
  const [searchText, setSearchText] = useState('');
  const [location, setLocation] = useState('All locations');
  const [specialty, setSpecialty] = useState('All styles');
  const [budget, setBudget] = useState('Any budget');
  const [mobileMenu, setMobileMenu] = useState(false);
  const [saved, setSaved] = useState([]);
  const [notice, setNotice] = useState('');

  const filteredDesigners = useMemo(() => designers.filter((designer) => {
    const query = searchText.trim().toLowerCase();
    const matchesQuery = !query || [designer.name, designer.location, designer.specialty].some((item) => item.toLowerCase().includes(query));
    const matchesLocation = location === 'All locations' || designer.location.includes(location);
    const matchesSpecialty = specialty === 'All styles' || designer.specialty === specialty;
    const matchesBudget = budget === 'Any budget' || (budget === 'Under ₦25,000' ? designer.price < 25000 : budget === '₦25,000–₦50,000' ? designer.price >= 25000 && designer.price <= 50000 : designer.price > 50000);
    return matchesQuery && matchesLocation && matchesSpecialty && matchesBudget;
  }), [searchText, location, specialty, budget]);

  const toggleSaved = (id) => setSaved((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  const showComingSoon = (feature) => setNotice(feature + ' is coming soon. Create your account to be ready when it launches.');
  const scrollToDesigners = () => document.getElementById('designers')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="app-shell">
      <div className="announcement"><Sparkles size={14} /> Your next favourite designer is closer than you think. <button onClick={scrollToDesigners}>Meet the makers <ArrowRight size={13} /></button></div>
      <header className="site-header">
        <Link to="/" className="brand" aria-label="FashionConnect home"><span className="brand-mark"><Shirt size={22} strokeWidth={1.8} /></span><span>fashion<span className="brand-light">connect</span><small>MADE PERSONAL</small></span></Link>
        <nav className={mobileMenu ? 'main-nav nav-open' : 'main-nav'}>
          <a href="#designers" onClick={() => setMobileMenu(false)}>Find a designer</a>
          <a href="#how-it-works" onClick={() => setMobileMenu(false)}>How it works</a>
          <a href="#for-designers" onClick={() => setMobileMenu(false)}>For designers</a>
        </nav>
        <div className="header-actions"><button className="text-button sign-in" onClick={() => showComingSoon('Sign in')}>Log in</button><button className="button button-dark header-cta" onClick={() => showComingSoon('Account registration')}>Join FashionConnect <ArrowUpRight size={16} /></button></div>
        <button className="mobile-menu" aria-label={mobileMenu ? 'Close menu' : 'Open menu'} onClick={() => setMobileMenu(!mobileMenu)}>{mobileMenu ? <X /> : <Menu />}</button>
      </header>

      {notice && <div className="notice" role="status">{notice}<button aria-label="Dismiss message" onClick={() => setNotice('')}><X size={16} /></button></div>}

      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> THE ART OF PERSONAL STYLE</div>
            <h1>Good style is<br />personal. <em>Find your</em><br /><em>person.</em></h1>
            <p className="hero-description">Meet talented fashion designers across Nigeria. Discover their craft, share your vision, and get pieces made just for you.</p>
            <div className="hero-actions"><button className="button button-burgundy" onClick={scrollToDesigners}>Find your designer <ArrowRight size={17} /></button><a className="underlined-link" href="#how-it-works">See how it works <ArrowUpRight size={15} /></a></div>
            <div className="hero-proof"><div className="avatar-stack"><span>A</span><span>T</span><span>M</span><span>+</span></div><div><strong>A community built around your style</strong><small>Independent talent. Personal attention.</small></div></div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo"><img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1100&q=85" alt="Fashion editorial showcasing a beautifully tailored outfit" /><div className="photo-shade" /></div>
            <div className="floating-note"><span className="note-icon"><BadgeCheck size={20} /></span><span><strong>Made with intention</strong><small>Designed around you</small></span></div>
            <div className="vertical-label">CRAFTED IN NIGERIA · WORN EVERYWHERE</div>
            <div className="hero-number">01 <span>/ PERSONAL STYLE</span></div>
          </div>
        </section>

        <section className="search-panel" aria-label="Find a fashion designer">
          <div className="search-intro"><span className="search-icon"><Search size={19} /></span><div><strong>Find your kind of designer</strong><small>Start with a style, a place, or a name.</small></div></div>
          <label className="search-field"><span>STYLE OR DESIGNER</span><div><Search size={16} /><input value={searchText} onChange={(event) => setSearchText(event.target.value)} placeholder="e.g. bridal, Amara..." /></div></label>
          <label className="search-field select-field"><span>LOCATION</span><div><MapPin size={16} /><select value={location} onChange={(event) => setLocation(event.target.value)}><option>All locations</option><option>Lagos</option><option>Ibadan</option><option>Abuja</option><option>Enugu</option><option>Port Harcourt</option></select><ChevronDown size={14} /></div></label>
          <label className="search-field select-field"><span>YOUR BUDGET</span><div><span className="naira-symbol">₦</span><select value={budget} onChange={(event) => setBudget(event.target.value)}><option>Any budget</option><option>Under ₦25,000</option><option>₦25,000–₦50,000</option><option>Above ₦50,000</option></select><ChevronDown size={14} /></div></label>
          <button className="search-submit" onClick={scrollToDesigners} aria-label="Show matching designers"><ArrowRight size={21} /></button>
        </section>

        <section className="trust-strip"><div><ShieldCheck size={18} /><span>Profiles built around real craft</span></div><i /><div><Heart size={17} /><span>Made for your measurements</span></div><i /><div><Check size={18} /><span>Clear quotes before you commit</span></div></section>

        <section className="designer-section" id="designers">
          <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> YOUR STYLE STARTS HERE</div><h2>Meet the <em>makers.</em></h2><p>Independent designers. Distinct points of view. One-of-a-kind pieces.</p></div><button className="view-all" onClick={() => { setSearchText(''); setLocation('All locations'); setSpecialty('All styles'); setBudget('Any budget'); }}>Explore all designers <ArrowRight size={16} /></button></div>
          <div className="specialty-filters">{specialties.map((item) => <button key={item} className={specialty === item ? 'filter-chip active' : 'filter-chip'} onClick={() => setSpecialty(item)}>{item}</button>)}</div>
          <div className="results-line"><span>{filteredDesigners.length} designers to discover</span><span>Curated for your next great look</span></div>
          {filteredDesigners.length ? <div className="designer-grid">{filteredDesigners.map((designer, index) => <article className="designer-card" key={designer.id}>
            <div className="designer-image"><img src={'https://images.unsplash.com/' + designer.image + '?auto=format&fit=crop&w=700&q=80'} alt={'Fashion inspiration for ' + designer.name} loading={index > 2 ? 'lazy' : 'eager'} /><span className="designer-tag">{designer.tag}</span><button className={saved.includes(designer.id) ? 'save-button is-saved' : 'save-button'} aria-label={saved.includes(designer.id) ? 'Remove saved designer' : 'Save designer'} onClick={() => toggleSaved(designer.id)}><Heart size={17} fill={saved.includes(designer.id) ? 'currentColor' : 'none'} /></button><span className="image-count">PORTFOLIO PREVIEW</span></div>
            <div className="designer-details"><div className="designer-title-row"><h3>{designer.name}</h3><span className="rating"><Star size={13} fill="currentColor" /> {designer.rating} <small>({designer.reviews})</small></span></div><p className="designer-location"><MapPin size={13} /> {designer.location}</p><span className="specialty-label">{designer.specialty}</span><div className="designer-card-bottom"><div><small>Typical starting budget</small><strong>{money(designer.price)}<span>+</span></strong></div><button className="round-arrow" aria-label={'View ' + designer.name} onClick={() => showComingSoon('Designer profiles')}><ArrowUpRight size={19} /></button></div></div>
          </article>)}</div> : <div className="empty-results"><Search size={28} /><h3>No designers match just yet</h3><p>Try a different location, style, or budget.</p><button className="button button-dark" onClick={() => { setSearchText(''); setLocation('All locations'); setSpecialty('All styles'); setBudget('Any budget'); }}>Clear filters</button></div>}
          <p className="demo-note">Preview profiles shown for design demonstration. Designer listings and ratings are sample content, not verified live accounts.</p>
        </section>

        <section className="how-section" id="how-it-works"><div className="how-image"><img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=80" alt="Fashion designer carefully working on a garment" loading="lazy" /><div className="image-caption"><span>THE DETAILS MATTER</span><strong>Every great piece starts with a conversation.</strong></div></div><div className="how-copy"><div className="eyebrow"><span className="eyebrow-line" /> A BETTER WAY TO GET DRESSED</div><h2>Your idea.<br />Their craft.<br /><em>Something yours.</em></h2><p>Finding the right designer should feel as good as wearing the final piece. We make the first steps simple, clear, and personal.</p><div className="steps"><div className="step"><span>01</span><div><h3>Discover your match</h3><p>Browse portfolios and find a designer whose work feels like you.</p></div></div><div className="step"><span>02</span><div><h3>Share your vision</h3><p>Send your idea, reference images, occasion, and preferred budget.</p></div></div><div className="step"><span>03</span><div><h3>Agree on the details</h3><p>Review the designer's quote, timeline, and payment terms before committing.</p></div></div></div><button className="button button-burgundy" onClick={scrollToDesigners}>Start exploring <ArrowRight size={17} /></button></div></section>

        <section className="designer-cta" id="for-designers"><div className="cta-decoration">FC.</div><div><div className="eyebrow light-eyebrow"><span className="eyebrow-line" /> FOR THE HANDS BEHIND THE WORK</div><h2>Your talent deserves<br />to be <em>discovered.</em></h2><p>Showcase your portfolio, meet customers who value your craft, and grow your fashion business on your terms.</p></div><button className="button button-cream" onClick={() => showComingSoon('Designer registration')}>Join as a designer <ArrowRight size={17} /></button></section>
      </main>

      <footer className="site-footer"><div className="footer-main"><Link to="/" className="brand footer-brand"><span className="brand-mark"><Shirt size={22} /></span><span>fashion<span className="brand-light">connect</span><small>MADE PERSONAL</small></span></Link><p>Connecting great taste with<br />the people who bring it to life.</p><div className="footer-links"><a href="#designers">Find a designer</a><a href="#how-it-works">How it works</a><a href="#for-designers">For designers</a><button onClick={() => showComingSoon('Help centre')}>Help centre</button></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} FashionConnect. Made for personal style.</span><span>Designed with care in Nigeria <span className="nigeria-dot">●</span></span><div><a href="#privacy" onClick={(event) => { event.preventDefault(); showComingSoon('Privacy policy'); }}>Privacy</a><a href="#terms" onClick={(event) => { event.preventDefault(); showComingSoon('Terms of service'); }}>Terms</a></div></div></footer>
    </div>
  );
}

export default App;