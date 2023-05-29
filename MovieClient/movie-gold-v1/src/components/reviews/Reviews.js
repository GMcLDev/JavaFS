import React from 'react';

import { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import api from '../../api/axiosconfig';
import ReviewForm from '../reviewForm/ReviewForm';

const Reviews = ({ getMovieData, movie }) => {
  const [reviews, setReviews] = useState([]);
  const revText = useRef();
  let params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId);
    fetchReviews();
  }, [movieId]);

  const fetchReviews = async () => {
    try {
      const response = await api.get(`/api/v1/reviews/${movieId}`);
      setReviews(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addReview = async (e) => {
    e.preventDefault();

    const rev = revText.current;

    try {
      const response = await api.post('/api/v1/reviews', {
        reviewBody: rev.value,
        imdbId: movieId,
      });

      const updatedReviews = [...reviews, { body: rev.value }];

      rev.value = '';

      setReviews(updatedReviews);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col>
          <img src={movie?.poster} alt='' />
        </Col>
        <Col>
          <>
            <Row>
              <Col>
                <ReviewForm
                  handleSubmit={addReview}
                  revText={revText}
                  labelText='Write a Review?'
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <hr />
              </Col>
            </Row>
          </>
          {reviews?.map((r, index) => (
            <React.Fragment key={index}>
              <Row>
                <Col>{r.body}</Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </React.Fragment>
          ))}
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
