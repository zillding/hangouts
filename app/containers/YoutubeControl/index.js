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

import YoutubeControlButton from 'components/YoutubeControlButton';

const YoutubeControl = (props) => {
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

  const PauseButton = (
    <YoutubeControlButton
      loading={loadingPause}
      disabled={disablePause}
      onClick={onPause}
    >
      Pause
    </YoutubeControlButton>
  );

  const ResumeButton = (
    <YoutubeControlButton
      loading={loadingResume}
      disabled={disableResume}
      onClick={onResume}
    >
      Resume
    </YoutubeControlButton>
  );

  const PreviousButton = (
    <YoutubeControlButton
      loading={loadingPrevious}
      disabled={disablePrevious}
      onClick={onPrevious}
    >
     Previous
    </YoutubeControlButton>
  );

  const NextButton = (
    <YoutubeControlButton
      loading={loadingNext}
      disabled={disableNext}
      onClick={onNext}
    >
     Next
    </YoutubeControlButton>
  );

  const SyncButton = (
    <YoutubeControlButton
      loading={loadingSync}
      disabled={disableSync}
      onClick={onSync}
    >
     Sync
    </YoutubeControlButton>
  );

  return (
    <Flex
      justifyContent="space-between"
    >
      <div>
        {
          isPlaying ?
            <PauseButton /> :
            <ResumeButton />
        }
        <PreviousButton />
        <NextButton />
      </div>
      <div>
        <SyncButton />
      </div>
    </Flex>
  );
};

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
