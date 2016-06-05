/*
 *
 * YoutubeControl
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { Flex } from 'react-flex';

import mapDispatchToProps from './actions';
import mapStateToProps from './selectors';

import YoutubeControlNextButton from 'components/YoutubeControlNextButton';
import YoutubeControlPauseButton from 'components/YoutubeControlPauseButton';
import YoutubeControlPreviousButton from 'components/YoutubeControlPreviousButton';
import YoutubeControlResumeButton from 'components/YoutubeControlResumeButton';
import YoutubeControlSyncButton from 'components/YoutubeControlSyncButton';
import YoutubeNotice from 'components/YoutubeNotice';

function YoutubeControl(props) {
  const {
    isPlaying,

    loadingPause,
    loadingResume,
    loadingPrevious,
    loadingNext,
    loadingSync,

    disablePause,
    disableResume,
    disablePrevious,
    disableNext,
    disableSync,

    onPause,
    onResume,
    onPrevious,
    onNext,
    onSync,
  } = props;

  const pauseButton = (
    <YoutubeControlPauseButton
      loading={loadingPause}
      disabled={disablePause}
      onClick={onPause}
    />
  );

  const resumeButton = (
    <YoutubeControlResumeButton
      loading={loadingResume}
      disabled={disableResume}
      onClick={onResume}
    />
  );

  const previousButton = (
    <YoutubeControlPreviousButton
      loading={loadingPrevious}
      disabled={disablePrevious}
      onClick={onPrevious}
    />
  );

  const nextButton = (
    <YoutubeControlNextButton
      loading={loadingNext}
      disabled={disableNext}
      onClick={onNext}
    />
  );

  const syncButton = (
    <YoutubeControlSyncButton
      loading={loadingSync}
      disabled={disableSync}
      onClick={onSync}
    />
  );

  return (
    <div>
      <Flex
        justifyContent="space-between"
      >
        <div>
          {isPlaying ? pauseButton : resumeButton}
          {previousButton}
          {nextButton}
        </div>
        <div>
          {syncButton}
        </div>
      </Flex>
      <YoutubeNotice />
    </div>
  );
}

YoutubeControl.propTypes = {
  isPlaying: PropTypes.bool.isRequired,

  loadingPause: PropTypes.bool.isRequired,
  loadingResume: PropTypes.bool.isRequired,
  loadingPrevious: PropTypes.bool.isRequired,
  loadingNext: PropTypes.bool.isRequired,
  loadingSync: PropTypes.bool.isRequired,

  disablePause: PropTypes.bool.isRequired,
  disableResume: PropTypes.bool.isRequired,
  disablePrevious: PropTypes.bool.isRequired,
  disableNext: PropTypes.bool.isRequired,
  disableSync: PropTypes.bool.isRequired,

  onPause: PropTypes.func.isRequired,
  onResume: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onSync: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(YoutubeControl);
