import './Sidenav.css';

import Button, { ButtonTheme } from '../button/Button';
import React from 'react';

const INSIGHT_TRENDS = {
    POSITIVE: true,
    NEGATIVE: false
};

const SearchBar = props => {
    return (
        <section className="SearchBar Row AlignCenterV">
            <i className="ri-search-line"></i>
            <input type="text" name="search-input" id="search-input" placeholder="Search"/>
        </section>
    )
};

const UserDetails = props => {
    return (
        <section className="Row UserDetailsPanel MarginTop7x">
            <img className="PositionRelative" src="https://wwwimage-us.pplusstatic.com/thumbnails/photos/w400-q80/cast/cast_manwithaplan_mattleblanc.jpg" alt="user_prof_img"/>
            <div className="Details">
                <div className="WelcomeMessage">{`Hi, ${props.name ? props.name: 'User'}`}</div>
                <div className="Email">{props.email || 'No Email'}</div>
            </div>
            <div className="FillParent"></div>
            <i className="ri-more-fill"></i>
        </section>
    )
}

const _getInsightTrendIconClass = trend => {
    if(INSIGHT_TRENDS.POSITIVE === trend){
        return "ri-star-fill";
    }

    else if(INSIGHT_TRENDS.NEGATIVE === trend){
        return "ri-alert-fill";
    }
}

const TopInsightsRow = props => {
    return (
        <div className="Row TopInsightsRow AlignStartV">
            <i 
                className={_getInsightTrendIconClass(props.trend)} 
                data-trend-positive={INSIGHT_TRENDS.POSITIVE === props.trend}
                data-trend-negative={INSIGHT_TRENDS.NEGATIVE === props.trend}
                ></i>

            <p className="InsightContent">
                <span className="InsightHighlight">{props.highlight}</span>
                {props.description}
            </p>
        </div>
    );
}

const InsightsPanel = props => {

    const _prepareTopInsight = (highlight, description, trend) => ({highlight: highlight, description: description, trend: trend});

    const _top_insights = [
        _prepareTopInsight(
            "Smoker Status", 
            "is the single most parameter for prediction. focus your attention on it",
            INSIGHT_TRENDS.POSITIVE
        ),
        _prepareTopInsight(
            "Demographic", 
            "data is important for prediction. Add data from a more diverse demographic set to improve accuracy",
            INSIGHT_TRENDS.POSITIVE
        ),
        _prepareTopInsight(
            "4 of your 212 parameters", 
            "are needed and many of the data entries are redundant. You may consider not measuring them at all",
            INSIGHT_TRENDS.NEGATIVE
        )
    ];

    return (
        <section className="InsightsPanel MarginTop4x">
            
            <div className="Row AlignCenterV AlignSpaceBetweenH">
                <h4>Insights</h4>
                <small className="ColorPrimary">See all results</small>
            </div>

            {
                _top_insights.map(
                    (_insight, idx) => <React.Fragment key={idx + 1}>
                        <TopInsightsRow key={idx + 2} highlight={_insight.highlight} description={_insight.description} trend={_insight.trend} />
                        {
                            (idx < _top_insights.length - 1) && <div key={idx+3} className="Separator"></div>
                        }
                    </React.Fragment>
                )
            }

        </section>
    );
};

const ReferAFriend = props => {
    return (
        <div className="ReferAFriendCard PositionRelative MarginTop2x">
            <i className="PositionAbsolute ri-error-warning-line"></i>
            <h4>Refer a Friend</h4>
            <p><small>Share your referral with friends</small></p>
            <Button icon="ri-share-fill" label="Share link" theme={ButtonTheme.WARNING}/>
        </div>
    );
}

const SidenavComponent = props => {
    return (
        <section className="SidenavContainer">
            <SearchBar />
            <section className="UpgradePlan Row AlignEndH">
                <Button icon="ri-add-line" label="Upgrade your plan" />
            </section>
            <UserDetails email="rafal@widelab.co" name="Rafal" />
            <InsightsPanel />
            <ReferAFriend />
        </section>
    );
};

export default SidenavComponent;