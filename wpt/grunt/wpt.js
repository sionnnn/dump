module.exports = {
    
    options: {
      locations: ['ec2-eu-central-1:Chrome'],
      key: '<%= wpt_key %>'
    },
    wpttest: {
      options: {
        url: [
          '<%= test_url %>'
        ]
      },
      dest: './results'
    }
    
}