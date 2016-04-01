'use strict';


module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    var app = {
            path: 'vacrex',
            id: 'io.cordova.vcarex',
            name: 'Vcarex'
        };

    grunt.initConfig({

    cordovacli: {
            options: {
                path: app.path,
                id: app.id,
                name: app.name,
                cli: 'cca'  // cca or cordova
            },
            cordova: {
                options: {
                    command: ['create','platform','plugin','build'],
                    platforms: ['ios','android'],
                    plugins: ['device','dialogs'],
                    path: app.path,
                    id: app.id,
                    name: app.name
                }
            },
            create: {
                options: {
                    command: 'create'
                }
            },
            add_platforms: {
                options: {
                    command: 'platform',
                    action: 'add',
                    platforms: ['ios','android']
                }
            },
            remove_platforms: {
                options: {
                    command: 'platform',
                    action: 'rm',
                    platforms: ['ios']
                }
            },
            add_plugins: {
                options: {
                    command: 'plugin',
                    action: 'add',
                    plugins: [
                        /*'battery-status',
                        'camera',*/
                        'console',
                        //'contacts',
                        'device'
                        /*'device-motion',
                        'device-orientation',
                        'dialogs',
                        'file',
                        'geolocation',
                        'globalization',
                        'inappbrowser',
                        'media',
                        'media-capture',
                        'network-information',
                        'splashscreen',
                        'vibration'*/
                    ]
                }
            },
            remove_plugin: {
                options: {
                    command: 'plugin',
                    action: 'rm',
                    plugins: [
                        'battery-status'
                    ]
                }
            },
            build_ios: {
                options: {
                    command: 'build',
                    platforms: ['ios']
                }
            },
            build_android: {
                options: {
                    command: 'build',
                    platforms: ['android']
                }
            },
            emulate_ios: {
                options: {
                    command: 'emulate',
                    platforms: ['ios']
                }
            },
            emulate_android: {
                options: {
                    command: 'emulate',
                    platforms: ['android'],
                    args: ['--target','Nexus5']
                }
            }
        }


    });


    grunt.registerTask('run_ios', ['cordovacli:build_ios', 'cordovacli:emulate_ios']);

    grunt.registerTask('setup', ['cordovacli:add_platforms', 'cordovacli:add_plugins']);

    grunt.registerTask('default', ['setup']);
};
