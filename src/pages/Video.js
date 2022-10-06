import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import RelatedVideoList from '../components/list/RelatedVideoList';
import Loading from '../components/ui/Loading';
import Description from '../components/VideoDetails/Description';
import Player from '../components/VideoDetails/Player';
import { fetchVideo } from '../features/singleVideo/videoSlice';

const Video = () => {
    const {id} = useParams();
    const dispatch = useDispatch()
    const {video, isLoading, isError, error} = useSelector((state) => state.video)
    
    useEffect(()=>{
        dispatch(fetchVideo(id));
        console.log(video)
    },[dispatch, id])

    return  isLoading ? <Loading /> : (<section class="pt-6 pb-20">
        <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
            <div class="grid grid-cols-3 gap-2 lg:gap-8">
                <div class="col-span-full w-full space-y-8 lg:col-span-2">
                    <Player video={video}/>
                    <Description video={video}/>
                </div>

                <RelatedVideoList video={video}/>
                
            </div>
        </div>
    </section>)
};

export default Video;