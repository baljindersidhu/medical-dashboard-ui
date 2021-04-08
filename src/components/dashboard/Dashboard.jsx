import Button from '../button/Button';
import './Dashboard.css';

const BrandHeaderAction = props => {
    return (
        <i className={`BrandHeaderActionIcon ${props?.icon}`}></i>
    );
}

const BrandHeader = props => {
    return (
        <nav className="Row AlignCenterV BrandHeader">
            <img src="icons/brand-icon.svg" alt="brand-icon"/>
            <a href="#" className="Active">Dashboard</a>
            <a href="#">Statistics</a>
            <a href="#">Performance</a>
            <div className="FillParent"></div>
            <BrandHeaderAction icon="ri-notification-2-fill" />
            <BrandHeaderAction icon="ri-settings-2-fill" />
        </nav>
    )
};

const FloatingNavBar = props => {
    return (
        <section className="Column FloatingNavBar PositionAbsolute">
            <i className="ri-dashboard-3-fill Active"></i>
            <i className="ri-account-circle-fill"></i>
            <i className="ri-pie-chart-2-fill"></i>
            <i className="ri-bill-fill"></i>
            <i className="ri-shut-down-fill"></i>
        </section>
    );
};

const MainHeader = props => {
    return (
        <header className="Row AlignCenterV AlignSpaceBetweenH">
            <h2>Medical Demo</h2>
            <Button label="Re-analyze data" icon="ri-refresh-line"/>
        </header>
    );
}

const DashboardComponent = props => {
    return (
        <section className="DashboardMainContentArea PositionRelative">
            <BrandHeader />
            <FloatingNavBar />
            <main>
                <MainHeader />
            </main>
        </section>
    );
};

export default DashboardComponent;