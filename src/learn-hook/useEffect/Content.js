import { useEffect, useState } from "react";

// 1. Callback luôn được gọi sau khi Component mounted

const tabs = ['posts', 'comments', 'albums'];

function Content(){
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    const [showGoToTop, setShowGoToTop] = useState(true);

    // 1. useEffect(callback()) (ít sử dụng)
    // - Gọi callback mỗi khi Component re-render
    // - Gọi callback mỗi khi Component thêm element vào DOM

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => res.json())
    //     .then(posts => {
    //         setPosts(posts);
    //     });
    // });

    // 2. useEffect(callback(), []);
    // - Chỉ gọi callback 1 lần khi Component mounted
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => res.json())
    //     .then(posts => {
    //         setPosts(posts);
    //     });
    // }, []);

    // 3. useEffect(callback(), [deps]);
    // - Callback sẽ được gọi lại mỗi khi deps thay đổi
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => res.json())
        .then(posts => {
            setPosts(posts);
        });
    }, [type]);

    useEffect(() => {
        
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 800);
        }
        console.log('add scroll');
        window.addEventListener('scroll', handleScroll);

        //cleanup function
        return () => {
            console.log('remove scroll');
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return(
        <div>
            {tabs.map(tab => (
                <button 
                    key={tab}
                    style={type === tab ? {
                        color: '#fff', 
                        backgroundColor: "#333"
                    } : {}}
                    onClick = {() => setType(tab)}>
                    {tab}
                </button>
            ))}
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>

            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                        backgroundColor: '#fff',
                        color: '#333'
                    }}
                >
                    Go To Top
                </button>
            )}
        </div>
    );
}

export default Content;