import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Spin, Input, Button, message } from "antd";
import { Card } from "../../Components/Common";
import { deleteTopic } from "../../redux/topics/api";
import Styles from "./styles";
import xmlService from "../../utils/xmlHttpRequestService";

const { TextArea } = Input;

const TopicDetail = props => {
  const user = useSelector(state => state.auth.user);
  const [loading, setLoading] = useState(true);
  const [topicInfo, setTopicInfo] = useState(null);
  const [comments, setComments] = useState([]);
  const [loadingInput, setLoadingInput] = useState(false);
  const [input, setInput] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  async function getComments() {
    const { topic } = props.location.state;

    setLoadingInput(true);
    const response = await xmlService.xmlFetch({
      path: `comments/${topic._id}`,
      method: "GET",
      sendToken: true
    });
    setComments(response.data);
    setInput("");
    setLoadingInput(false);
  }

  useEffect(() => {
    const { topic } = props.location.state;
    setTopicInfo(topic);
    getComments();
    setLoading(false);
  }, []);

  const onSubmitComment = async () => {
    if (input.length <= 0) {
      message.error("There is nothing to post!");
    }
    const body = { message: input, topicId: topicInfo._id, owner: user._id };
    const response = await xmlService.xmlFetch({
      path: "comments",
      method: "POST",
      body,
      sendToken: true
    });
    getComments();
  };

  const onDeleteTopic = async () => {
    await setLoading(true);
    try {
      await dispatch(deleteTopic(topicInfo._id));
      message.success("Deleted");
      history.push("/forum");
    } catch (err) {
      message.error(err.message);
    }
    setLoading(false);
  };

  return (
    <Styles>
      {loading ? (
        <Spin />
      ) : (
        <>
          <Card
            className="topic"
            title={
              <div className="topic-head">
                <span>{topicInfo.title}</span>
                {user.role === 2 && (
                  <Button
                    type="danger"
                    onClick={onDeleteTopic}
                    loading={loading}
                    disabled={loading}
                  >
                    Delete Topic
                  </Button>
                )}
              </div>
            }
          >
            <p className="message-owner">{`${topicInfo.owner.name} ${topicInfo.owner.surname}`}</p>
            <span>{topicInfo.message}</span>
          </Card>

          {comments.map((comment, idx) => (
            <Card className="comment" key={`comment-${idx}`}>
              <p className="message-owner">{`${comment.owner.name} ${comment.owner.surname}`}</p>
              <span>{comment.message}</span>
            </Card>
          ))}
          <div className="input-section">
            <TextArea
              className="comment-input"
              rows={3}
              onChange={e => setInput(e.target.value)}
              value={input}
            />
            <Button
              type="primary"
              onClick={onSubmitComment}
              loading={loadingInput}
              disabled={loadingInput}
            >
              Comment
            </Button>
          </div>
        </>
      )}
    </Styles>
  );
};

export default TopicDetail;
