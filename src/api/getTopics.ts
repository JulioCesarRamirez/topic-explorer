import { gql, useQuery } from '@apollo/client';
import { useState, useMemo, useEffect } from 'react';
interface TopicResponse {
    topic: Topic
}

export const getTopicQuery = gql`
query getTopic ($topicToSearch: String!){
    topic(name: $topicToSearch) {
        name
        relatedTopics(first: 10) {
            id
            name
            stargazers {
                totalCount
            }
        }
    }
}
`;
export interface RelatedTopics {
    id: string;
    name: string;
    stargazers: Stargazers
}

export interface Stargazers {
    totalCount: number
}


export interface Topic {
    name: string,
    relatedTopics: RelatedTopics[]
}

export const usePostsQuery = (customTopic: string) => {
    const [loading, setLoading] = useState(false);
    const topicToSearch = customTopic.toLowerCase();

    const queryOptions = useMemo(() => ({ variables: { topicToSearch } }), [topicToSearch]);
    const { data: dataResponse, error } = useQuery<TopicResponse>(getTopicQuery, queryOptions);
    const topic = dataResponse?.topic

    useEffect(() => {
        setLoading(!topic)
    }, [topic]);

    return { topic, loading, error }
}