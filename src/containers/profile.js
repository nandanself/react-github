import React, { Component } from 'react';
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import { profileSearch } from '../actions/profile';
import {ProfilePic} from '../components/profile-picture';
import  {InfoStrip} from "../components/info-strip";

class Profile extends Component {

  componentDidMount(){
      let username = this.props.match.params.username;
      this.props.profileSearch(username);
  }
    
  render() {
    let profileDetails = this.props.profile;
    console.log(this.props);  
    let Profile = null
    if (this.props.profile ){
        Profile =  (
                <div>
                    <ProfilePic src={profileDetails.avatar_url}/>
                    <div className="detailsBox">
                        <InfoStrip object_key="Login" value={profileDetails.login} />
                        <InfoStrip object_key="ID" value={profileDetails.id} />
                        <InfoStrip object_key="Name" value={profileDetails.name} />
                        <InfoStrip object_key="Location" value={profileDetails.location} />
                        <InfoStrip object_key="email" value={profileDetails.email} />
                        <InfoStrip object_key="BIO" value={profileDetails.bio} />
                        <InfoStrip object_key="Following" value={profileDetails.following} />
                        <InfoStrip object_key="followers" value={profileDetails.followers} />
                        <InfoStrip object_key="company" value={profileDetails.company} />

                    </div>
                </div> 
        )
    }
    return (
        <div className="profile-page">
            <h1>Profile Page</h1>
            {Profile} 
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        profile:state.ProfileReducer.profile || {},
    }
}


const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators( 
        {
            profileSearch:(name) => profileSearch(name), 
        },
        dispatch
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
