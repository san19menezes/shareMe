import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';

const Feed = () => {
    const [loading, setLoading] = useState(false);
    const [pins, setPins] = useState(null)
    const { categoryId } = useParams();

    const ideaName = categoryId || 'new';

    useEffect(() => {
        if (categoryId) {
            setLoading(true);
            const query = searchQuery(categoryId);
            client.fetch(query).then((data) => {
                setPins(data);
                setLoading(false);
            })
        } else {
            client.fetch(feedQuery).then((data) => {
                setPins(data);
                setLoading(false);
            })
        }
    }, [categoryId])

    if (loading) return <Spinner message={`We are adding ${ideaName} ideas to your feed!`} />
    if (!pins?.length) return <h2 className=''>No pins available</h2>
    return (
        <div className=''>
            {pins && <MasonryLayout pins={pins} />}
        </div>
    )
}

export default Feed;