const users = [
    {
        user_name: "Admin_Youssouf",
        password: "admin_youssouf_1",
        profile_pic: "https://ca.slack-edge.com/E46RWAPHC-U03AMCRAUAH-a7db0cdab7e6-512",
        bio: "I am the greatest redux user ever",
    },
    {
        user_name: "Admin_Sergio",
        password: "admin_sergio_1",
        profile_pic: "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_675,q_auto:eco,w_1200/cms/uploads/HJ3aPYQNRqSg2C7x0v55.png",
        bio: "I love fast cars"
    },
    {
        user_name: "Admin_Shirelle",
        password: "admin_shirelle_1",
        profile_pic: "https://ca.slack-edge.com/E46RWAPHC-U03AL0FPPS9-30f42f28a346-512",
        bio: "nicknames include Relle, Rello, and Shirelley",
    }
];

const posts = [
    {
        id: 1,
        user_name: "Admin_Shirelle",
        written_content: "Example post 1",
        time_created: "2023-01-01 05:23:39",
        num_of_likes: 2,
    },
    {
        id: 2,
        user_name: "Admin_Sergio",
        written_content: "Example post 2 TESTING",
        time_created: "2023-02-01 05:23:39",
        num_of_likes: 3,
    }
];

module.exports = {
    users,
    posts
}
