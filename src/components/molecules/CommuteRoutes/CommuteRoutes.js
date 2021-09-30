import React from 'react';
import PropTypes from 'prop-types';
import CommuteIcon from '../../atoms/commuteIcon/CommuteIcon';
import { makeStyles } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
       
    label : {
        fontSize:"13px",
        color : "#19293b",
        marginTop: '20px',
        marginBottom: '8px',
    },

    flexDisplay : {
        display: "flex",
    },
    
    primaryMargin : {
        margin: "-3px",
    }

  });

  const CommuteRoutes = ({ icons, primary, isJobCard, onClick }) => {
    const classes = useStyles();

    const commuteIcons = icons.map(obj => {
        return <CommuteIcon className={isJobCard ? classes.primaryMargin: ""} type={obj.type} key={obj.type} selected={obj.selected} onClick={onClick} isJobCard={isJobCard} />;
    });

    return (
        <div data-testid="commuteRoutes-placeholder">
            {primary ?<Typography variant="h4" className={classes.label} >Commute routes available:</Typography>:<> </> }     
            <div className={classes.flexDisplay}>
                {/* <div style={{}} > */}
                    {commuteIcons} 
                {/* </div> */}
            </div>
        </div>
    );
};

CommuteRoutes.propTypes = {
    icons: PropTypes.array,
    primary: PropTypes.bool,
    isJobCard : PropTypes.bool,
    onClick : PropTypes.func,
};

export default CommuteRoutes;