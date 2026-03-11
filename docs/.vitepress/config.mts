
import { defineConfig } from 'vitepress'

export default defineConfig({
  "title": "Ops Scripts",
  "description": "常用运维脚本合集",
  "themeConfig": {
    "search": {
      "provider": "local"
    },
    "sidebar": [
      {
        "text": "内网穿透",
        "items": [
          {
            "text": "natapp",
            "link": "/内网穿透/natapp"
          },
          {
            "text": "lanproxy",
            "link": "/内网穿透/lanproxy"
          },
          {
            "text": "holer",
            "link": "/内网穿透/holer"
          },
          {
            "text": "pagekite",
            "link": "/内网穿透/pagekite"
          },
          {
            "text": "localtunnel",
            "link": "/内网穿透/localtunnel"
          },
          {
            "text": "frps",
            "link": "/内网穿透/frps"
          },
          {
            "text": "fatedier-frp",
            "link": "/内网穿透/fatedier-frp"
          },
          {
            "text": "ngrok",
            "link": "/内网穿透/ngrok"
          },
          {
            "text": "sunny-ngrok",
            "link": "/内网穿透/sunny-ngrok"
          },
          {
            "text": "nps",
            "link": "/内网穿透/nps"
          }
        ],
        "collapsed": false
      },
      {
        "text": "CI_CD",
        "items": [
          {
            "text": "argo",
            "link": "/CI_CD/argo"
          },
          {
            "text": "chef",
            "link": "/CI_CD/chef"
          },
          {
            "text": "travis-ci",
            "link": "/CI_CD/travis-ci"
          },
          {
            "text": "minikube",
            "link": "/CI_CD/minikube"
          },
          {
            "text": "tekton",
            "link": "/CI_CD/tekton"
          },
          {
            "text": "ansible",
            "link": "/CI_CD/ansible"
          },
          {
            "text": "gocd",
            "link": "/CI_CD/gocd"
          },
          {
            "text": "drone",
            "link": "/CI_CD/drone"
          },
          {
            "text": "jenkins",
            "link": "/CI_CD/jenkins"
          },
          {
            "text": "helm",
            "link": "/CI_CD/helm"
          },
          {
            "text": "teamcity",
            "link": "/CI_CD/teamcity"
          },
          {
            "text": "gitlab",
            "link": "/CI_CD/gitlab"
          },
          {
            "text": "vagrant",
            "link": "/CI_CD/vagrant"
          },
          {
            "text": "kind",
            "link": "/CI_CD/kind"
          },
          {
            "text": "puppet",
            "link": "/CI_CD/puppet"
          },
          {
            "text": "bamboo",
            "link": "/CI_CD/bamboo"
          },
          {
            "text": "saltstack",
            "link": "/CI_CD/saltstack"
          },
          {
            "text": "packer",
            "link": "/CI_CD/packer"
          },
          {
            "text": "circleci",
            "link": "/CI_CD/circleci"
          },
          {
            "text": "terraform",
            "link": "/CI_CD/terraform"
          },
          {
            "text": "flux",
            "link": "/CI_CD/flux"
          },
          {
            "text": "spinnaker",
            "link": "/CI_CD/spinnaker"
          }
        ],
        "collapsed": false
      },
      {
        "text": "监控运维",
        "items": [
          {
            "text": "fluentd",
            "link": "/监控运维/fluentd"
          },
          {
            "text": "icinga",
            "link": "/监控运维/icinga"
          },
          {
            "text": "graylog",
            "link": "/监控运维/graylog"
          },
          {
            "text": "nagios",
            "link": "/监控运维/nagios"
          },
          {
            "text": "collectd",
            "link": "/监控运维/collectd"
          },
          {
            "text": "pinpoint",
            "link": "/监控运维/pinpoint"
          },
          {
            "text": "alertmanager",
            "link": "/监控运维/alertmanager"
          },
          {
            "text": "splunk",
            "link": "/监控运维/splunk"
          },
          {
            "text": "zabbix",
            "link": "/监控运维/zabbix"
          },
          {
            "text": "munin",
            "link": "/监控运维/munin"
          },
          {
            "text": "metricbeat",
            "link": "/监控运维/metricbeat"
          },
          {
            "text": "zipkin",
            "link": "/监控运维/zipkin"
          },
          {
            "text": "skywalking",
            "link": "/监控运维/skywalking"
          },
          {
            "text": "chronograf",
            "link": "/监控运维/chronograf"
          },
          {
            "text": "elk",
            "link": "/监控运维/elk"
          },
          {
            "text": "filebeat",
            "link": "/监控运维/filebeat"
          },
          {
            "text": "efk",
            "link": "/监控运维/efk"
          },
          {
            "text": "logstash",
            "link": "/监控运维/logstash"
          },
          {
            "text": "kapacitor",
            "link": "/监控运维/kapacitor"
          },
          {
            "text": "ganglia",
            "link": "/监控运维/ganglia"
          },
          {
            "text": "graphite",
            "link": "/监控运维/graphite"
          },
          {
            "text": "statsd",
            "link": "/监控运维/statsd"
          },
          {
            "text": "cacti",
            "link": "/监控运维/cacti"
          },
          {
            "text": "kibana",
            "link": "/监控运维/kibana"
          },
          {
            "text": "jaeger",
            "link": "/监控运维/jaeger"
          },
          {
            "text": "grafana-loki",
            "link": "/监控运维/grafana-loki"
          },
          {
            "text": "telegraf",
            "link": "/监控运维/telegraf"
          },
          {
            "text": "prometheus-grafana",
            "link": "/监控运维/prometheus-grafana"
          }
        ],
        "collapsed": false
      },
      {
        "text": "面板工具",
        "items": [
          {
            "text": "froxlor",
            "link": "/面板工具/froxlor"
          },
          {
            "text": "virtualmin",
            "link": "/面板工具/virtualmin"
          },
          {
            "text": "nginx-proxy-manager",
            "link": "/面板工具/nginx-proxy-manager"
          },
          {
            "text": "cpanel",
            "link": "/面板工具/cpanel"
          },
          {
            "text": "ajenti",
            "link": "/面板工具/ajenti"
          },
          {
            "text": "vestacp",
            "link": "/面板工具/vestacp"
          },
          {
            "text": "1panel",
            "link": "/面板工具/1panel"
          },
          {
            "text": "webmin",
            "link": "/面板工具/webmin"
          },
          {
            "text": "plesk",
            "link": "/面板工具/plesk"
          },
          {
            "text": "cockpit",
            "link": "/面板工具/cockpit"
          },
          {
            "text": "baota",
            "link": "/面板工具/baota"
          },
          {
            "text": "cyberpanel",
            "link": "/面板工具/cyberpanel"
          },
          {
            "text": "cloudpanel",
            "link": "/面板工具/cloudpanel"
          },
          {
            "text": "hestiacp",
            "link": "/面板工具/hestiacp"
          },
          {
            "text": "aapanel",
            "link": "/面板工具/aapanel"
          },
          {
            "text": "ispconfig",
            "link": "/面板工具/ispconfig"
          },
          {
            "text": "directadmin",
            "link": "/面板工具/directadmin"
          }
        ],
        "collapsed": false
      },
      {
        "text": "容器",
        "items": [
          {
            "text": "skopeo",
            "link": "/容器/skopeo"
          },
          {
            "text": "containerd",
            "link": "/容器/containerd"
          },
          {
            "text": "buildah",
            "link": "/容器/buildah"
          },
          {
            "text": "lxc",
            "link": "/容器/lxc"
          },
          {
            "text": "gvisor",
            "link": "/容器/gvisor"
          },
          {
            "text": "kata-containers",
            "link": "/容器/kata-containers"
          },
          {
            "text": "k3s",
            "link": "/容器/k3s"
          },
          {
            "text": "rkt",
            "link": "/容器/rkt"
          },
          {
            "text": "img",
            "link": "/容器/img"
          },
          {
            "text": "kaniko",
            "link": "/容器/kaniko"
          },
          {
            "text": "firecracker",
            "link": "/容器/firecracker"
          },
          {
            "text": "nerdctl",
            "link": "/容器/nerdctl"
          },
          {
            "text": "docker-compose",
            "link": "/容器/docker-compose"
          },
          {
            "text": "podman",
            "link": "/容器/podman"
          },
          {
            "text": "docker",
            "link": "/容器/docker"
          },
          {
            "text": "lxd",
            "link": "/容器/lxd"
          },
          {
            "text": "portainer",
            "link": "/容器/portainer"
          },
          {
            "text": "cri-o",
            "link": "/容器/cri-o"
          }
        ],
        "collapsed": false
      },
      {
        "text": "Web服务器",
        "items": [
          {
            "text": "squid",
            "link": "/Web服务器/squid"
          },
          {
            "text": "cherokee",
            "link": "/Web服务器/cherokee"
          },
          {
            "text": "haproxy",
            "link": "/Web服务器/haproxy"
          },
          {
            "text": "apache2",
            "link": "/Web服务器/apache2"
          },
          {
            "text": "h2o",
            "link": "/Web服务器/h2o"
          },
          {
            "text": "ats",
            "link": "/Web服务器/ats"
          },
          {
            "text": "caddy2",
            "link": "/Web服务器/caddy2"
          },
          {
            "text": "traefik",
            "link": "/Web服务器/traefik"
          },
          {
            "text": "lighttpd",
            "link": "/Web服务器/lighttpd"
          },
          {
            "text": "tomcat",
            "link": "/Web服务器/tomcat"
          },
          {
            "text": "jetty",
            "link": "/Web服务器/jetty"
          },
          {
            "text": "nginx",
            "link": "/Web服务器/nginx"
          },
          {
            "text": "openresty",
            "link": "/Web服务器/openresty"
          },
          {
            "text": "tengine",
            "link": "/Web服务器/tengine"
          },
          {
            "text": "varnish",
            "link": "/Web服务器/varnish"
          },
          {
            "text": "envoy",
            "link": "/Web服务器/envoy"
          },
          {
            "text": "caddy",
            "link": "/Web服务器/caddy"
          }
        ],
        "collapsed": false
      },
      {
        "text": "其他",
        "items": [
          {
            "text": "generic-tool-20",
            "link": "/其他/generic-tool-20"
          },
          {
            "text": "generic-tool-216",
            "link": "/其他/generic-tool-216"
          },
          {
            "text": "generic-tool-88",
            "link": "/其他/generic-tool-88"
          },
          {
            "text": "make",
            "link": "/其他/make"
          },
          {
            "text": "generic-tool-256",
            "link": "/其他/generic-tool-256"
          },
          {
            "text": "generic-tool-361",
            "link": "/其他/generic-tool-361"
          },
          {
            "text": "generic-tool-170",
            "link": "/其他/generic-tool-170"
          },
          {
            "text": "generic-tool-11",
            "link": "/其他/generic-tool-11"
          },
          {
            "text": "generic-tool-39",
            "link": "/其他/generic-tool-39"
          },
          {
            "text": "generic-tool-38",
            "link": "/其他/generic-tool-38"
          },
          {
            "text": "generic-tool-159",
            "link": "/其他/generic-tool-159"
          },
          {
            "text": "generic-tool-84",
            "link": "/其他/generic-tool-84"
          },
          {
            "text": "generic-tool-213",
            "link": "/其他/generic-tool-213"
          },
          {
            "text": "generic-tool-26",
            "link": "/其他/generic-tool-26"
          },
          {
            "text": "generic-tool-139",
            "link": "/其他/generic-tool-139"
          },
          {
            "text": "generic-tool-223",
            "link": "/其他/generic-tool-223"
          },
          {
            "text": "generic-tool-148",
            "link": "/其他/generic-tool-148"
          },
          {
            "text": "generic-tool-61",
            "link": "/其他/generic-tool-61"
          },
          {
            "text": "generic-tool-283",
            "link": "/其他/generic-tool-283"
          },
          {
            "text": "generic-tool-346",
            "link": "/其他/generic-tool-346"
          },
          {
            "text": "generic-tool-307",
            "link": "/其他/generic-tool-307"
          },
          {
            "text": "generic-tool-79",
            "link": "/其他/generic-tool-79"
          },
          {
            "text": "generic-tool-140",
            "link": "/其他/generic-tool-140"
          },
          {
            "text": "generic-tool-99",
            "link": "/其他/generic-tool-99"
          },
          {
            "text": "generic-tool-65",
            "link": "/其他/generic-tool-65"
          },
          {
            "text": "generic-tool-67",
            "link": "/其他/generic-tool-67"
          },
          {
            "text": "generic-tool-143",
            "link": "/其他/generic-tool-143"
          },
          {
            "text": "rustc",
            "link": "/其他/rustc"
          },
          {
            "text": "generic-tool-337",
            "link": "/其他/generic-tool-337"
          },
          {
            "text": "generic-tool-78",
            "link": "/其他/generic-tool-78"
          },
          {
            "text": "generic-tool-298",
            "link": "/其他/generic-tool-298"
          },
          {
            "text": "generic-tool-123",
            "link": "/其他/generic-tool-123"
          },
          {
            "text": "generic-tool-164",
            "link": "/其他/generic-tool-164"
          },
          {
            "text": "generic-tool-259",
            "link": "/其他/generic-tool-259"
          },
          {
            "text": "generic-tool-114",
            "link": "/其他/generic-tool-114"
          },
          {
            "text": "generic-tool-97",
            "link": "/其他/generic-tool-97"
          },
          {
            "text": "generic-tool-269",
            "link": "/其他/generic-tool-269"
          },
          {
            "text": "generic-tool-56",
            "link": "/其他/generic-tool-56"
          },
          {
            "text": "generic-tool-127",
            "link": "/其他/generic-tool-127"
          },
          {
            "text": "generic-tool-335",
            "link": "/其他/generic-tool-335"
          },
          {
            "text": "ant",
            "link": "/其他/ant"
          },
          {
            "text": "generic-tool-64",
            "link": "/其他/generic-tool-64"
          },
          {
            "text": "generic-tool-209",
            "link": "/其他/generic-tool-209"
          },
          {
            "text": "erlang",
            "link": "/其他/erlang"
          },
          {
            "text": "generic-tool-224",
            "link": "/其他/generic-tool-224"
          },
          {
            "text": "generic-tool-271",
            "link": "/其他/generic-tool-271"
          },
          {
            "text": "generic-tool-319",
            "link": "/其他/generic-tool-319"
          },
          {
            "text": "generic-tool-344",
            "link": "/其他/generic-tool-344"
          },
          {
            "text": "generic-tool-210",
            "link": "/其他/generic-tool-210"
          },
          {
            "text": "generic-tool-22",
            "link": "/其他/generic-tool-22"
          },
          {
            "text": "haskell",
            "link": "/其他/haskell"
          },
          {
            "text": "generic-tool-94",
            "link": "/其他/generic-tool-94"
          },
          {
            "text": "generic-tool-349",
            "link": "/其他/generic-tool-349"
          },
          {
            "text": "elixir",
            "link": "/其他/elixir"
          },
          {
            "text": "generic-tool-35",
            "link": "/其他/generic-tool-35"
          },
          {
            "text": "generic-tool-277",
            "link": "/其他/generic-tool-277"
          },
          {
            "text": "generic-tool-146",
            "link": "/其他/generic-tool-146"
          },
          {
            "text": "generic-tool-36",
            "link": "/其他/generic-tool-36"
          },
          {
            "text": "generic-tool-290",
            "link": "/其他/generic-tool-290"
          },
          {
            "text": "generic-tool-107",
            "link": "/其他/generic-tool-107"
          },
          {
            "text": "generic-tool-312",
            "link": "/其他/generic-tool-312"
          },
          {
            "text": "generic-tool-71",
            "link": "/其他/generic-tool-71"
          },
          {
            "text": "generic-tool-272",
            "link": "/其他/generic-tool-272"
          },
          {
            "text": "generic-tool-321",
            "link": "/其他/generic-tool-321"
          },
          {
            "text": "generic-tool-297",
            "link": "/其他/generic-tool-297"
          },
          {
            "text": "generic-tool-52",
            "link": "/其他/generic-tool-52"
          },
          {
            "text": "generic-tool-149",
            "link": "/其他/generic-tool-149"
          },
          {
            "text": "generic-tool-273",
            "link": "/其他/generic-tool-273"
          },
          {
            "text": "generic-tool-110",
            "link": "/其他/generic-tool-110"
          },
          {
            "text": "generic-tool-96",
            "link": "/其他/generic-tool-96"
          },
          {
            "text": "generic-tool-301",
            "link": "/其他/generic-tool-301"
          },
          {
            "text": "ninja",
            "link": "/其他/ninja"
          },
          {
            "text": "generic-tool-46",
            "link": "/其他/generic-tool-46"
          },
          {
            "text": "generic-tool-218",
            "link": "/其他/generic-tool-218"
          },
          {
            "text": "generic-tool-51",
            "link": "/其他/generic-tool-51"
          },
          {
            "text": "generic-tool-112",
            "link": "/其他/generic-tool-112"
          },
          {
            "text": "generic-tool-197",
            "link": "/其他/generic-tool-197"
          },
          {
            "text": "generic-tool-244",
            "link": "/其他/generic-tool-244"
          },
          {
            "text": "generic-tool-275",
            "link": "/其他/generic-tool-275"
          },
          {
            "text": "generic-tool-281",
            "link": "/其他/generic-tool-281"
          },
          {
            "text": "generic-tool-270",
            "link": "/其他/generic-tool-270"
          },
          {
            "text": "generic-tool-322",
            "link": "/其他/generic-tool-322"
          },
          {
            "text": "generic-tool-5",
            "link": "/其他/generic-tool-5"
          },
          {
            "text": "generic-tool-86",
            "link": "/其他/generic-tool-86"
          },
          {
            "text": "generic-tool-339",
            "link": "/其他/generic-tool-339"
          },
          {
            "text": "imagemagick",
            "link": "/其他/imagemagick"
          },
          {
            "text": "generic-tool-289",
            "link": "/其他/generic-tool-289"
          },
          {
            "text": "generic-tool-100",
            "link": "/其他/generic-tool-100"
          },
          {
            "text": "generic-tool-320",
            "link": "/其他/generic-tool-320"
          },
          {
            "text": "generic-tool-60",
            "link": "/其他/generic-tool-60"
          },
          {
            "text": "generic-tool-113",
            "link": "/其他/generic-tool-113"
          },
          {
            "text": "generic-tool-45",
            "link": "/其他/generic-tool-45"
          },
          {
            "text": "generic-tool-80",
            "link": "/其他/generic-tool-80"
          },
          {
            "text": "generic-tool-233",
            "link": "/其他/generic-tool-233"
          },
          {
            "text": "generic-tool-311",
            "link": "/其他/generic-tool-311"
          },
          {
            "text": "generic-tool-72",
            "link": "/其他/generic-tool-72"
          },
          {
            "text": "generic-tool-92",
            "link": "/其他/generic-tool-92"
          },
          {
            "text": "generic-tool-232",
            "link": "/其他/generic-tool-232"
          },
          {
            "text": "generic-tool-12",
            "link": "/其他/generic-tool-12"
          },
          {
            "text": "generic-tool-305",
            "link": "/其他/generic-tool-305"
          },
          {
            "text": "generic-tool-212",
            "link": "/其他/generic-tool-212"
          },
          {
            "text": "generic-tool-178",
            "link": "/其他/generic-tool-178"
          },
          {
            "text": "generic-tool-177",
            "link": "/其他/generic-tool-177"
          },
          {
            "text": "git",
            "link": "/其他/git"
          },
          {
            "text": "generic-tool-363",
            "link": "/其他/generic-tool-363"
          },
          {
            "text": "generic-tool-280",
            "link": "/其他/generic-tool-280"
          },
          {
            "text": "generic-tool-136",
            "link": "/其他/generic-tool-136"
          },
          {
            "text": "mercurial",
            "link": "/其他/mercurial"
          },
          {
            "text": "generic-tool-21",
            "link": "/其他/generic-tool-21"
          },
          {
            "text": "generic-tool-338",
            "link": "/其他/generic-tool-338"
          },
          {
            "text": "generic-tool-318",
            "link": "/其他/generic-tool-318"
          },
          {
            "text": "generic-tool-28",
            "link": "/其他/generic-tool-28"
          },
          {
            "text": "generic-tool-59",
            "link": "/其他/generic-tool-59"
          },
          {
            "text": "generic-tool-116",
            "link": "/其他/generic-tool-116"
          },
          {
            "text": "generic-tool-147",
            "link": "/其他/generic-tool-147"
          },
          {
            "text": "generic-tool-356",
            "link": "/其他/generic-tool-356"
          },
          {
            "text": "generic-tool-359",
            "link": "/其他/generic-tool-359"
          },
          {
            "text": "generic-tool-95",
            "link": "/其他/generic-tool-95"
          },
          {
            "text": "generic-tool-135",
            "link": "/其他/generic-tool-135"
          },
          {
            "text": "generic-tool-293",
            "link": "/其他/generic-tool-293"
          },
          {
            "text": "generic-tool-330",
            "link": "/其他/generic-tool-330"
          },
          {
            "text": "python",
            "link": "/其他/python"
          },
          {
            "text": "generic-tool-313",
            "link": "/其他/generic-tool-313"
          },
          {
            "text": "generic-tool-187",
            "link": "/其他/generic-tool-187"
          },
          {
            "text": "generic-tool-323",
            "link": "/其他/generic-tool-323"
          },
          {
            "text": "generic-tool-29",
            "link": "/其他/generic-tool-29"
          },
          {
            "text": "generic-tool-336",
            "link": "/其他/generic-tool-336"
          },
          {
            "text": "generic-tool-366",
            "link": "/其他/generic-tool-366"
          },
          {
            "text": "generic-tool-328",
            "link": "/其他/generic-tool-328"
          },
          {
            "text": "generic-tool-83",
            "link": "/其他/generic-tool-83"
          },
          {
            "text": "generic-tool-87",
            "link": "/其他/generic-tool-87"
          },
          {
            "text": "generic-tool-157",
            "link": "/其他/generic-tool-157"
          },
          {
            "text": "generic-tool-376",
            "link": "/其他/generic-tool-376"
          },
          {
            "text": "generic-tool-53",
            "link": "/其他/generic-tool-53"
          },
          {
            "text": "generic-tool-31",
            "link": "/其他/generic-tool-31"
          },
          {
            "text": "generic-tool-304",
            "link": "/其他/generic-tool-304"
          },
          {
            "text": "generic-tool-332",
            "link": "/其他/generic-tool-332"
          },
          {
            "text": "go",
            "link": "/其他/go"
          },
          {
            "text": "generic-tool-161",
            "link": "/其他/generic-tool-161"
          },
          {
            "text": "generic-tool-115",
            "link": "/其他/generic-tool-115"
          },
          {
            "text": "generic-tool-333",
            "link": "/其他/generic-tool-333"
          },
          {
            "text": "generic-tool-255",
            "link": "/其他/generic-tool-255"
          },
          {
            "text": "generic-tool-251",
            "link": "/其他/generic-tool-251"
          },
          {
            "text": "generic-tool-375",
            "link": "/其他/generic-tool-375"
          },
          {
            "text": "generic-tool-207",
            "link": "/其他/generic-tool-207"
          },
          {
            "text": "svn",
            "link": "/其他/svn"
          },
          {
            "text": "generic-tool-266",
            "link": "/其他/generic-tool-266"
          },
          {
            "text": "generic-tool-360",
            "link": "/其他/generic-tool-360"
          },
          {
            "text": "generic-tool-198",
            "link": "/其他/generic-tool-198"
          },
          {
            "text": "generic-tool-203",
            "link": "/其他/generic-tool-203"
          },
          {
            "text": "generic-tool-225",
            "link": "/其他/generic-tool-225"
          },
          {
            "text": "generic-tool-326",
            "link": "/其他/generic-tool-326"
          },
          {
            "text": "ruby",
            "link": "/其他/ruby"
          },
          {
            "text": "generic-tool-357",
            "link": "/其他/generic-tool-357"
          },
          {
            "text": "generic-tool-158",
            "link": "/其他/generic-tool-158"
          },
          {
            "text": "generic-tool-128",
            "link": "/其他/generic-tool-128"
          },
          {
            "text": "generic-tool-238",
            "link": "/其他/generic-tool-238"
          },
          {
            "text": "generic-tool-163",
            "link": "/其他/generic-tool-163"
          },
          {
            "text": "generic-tool-226",
            "link": "/其他/generic-tool-226"
          },
          {
            "text": "generic-tool-134",
            "link": "/其他/generic-tool-134"
          },
          {
            "text": "generic-tool-167",
            "link": "/其他/generic-tool-167"
          },
          {
            "text": "generic-tool-284",
            "link": "/其他/generic-tool-284"
          },
          {
            "text": "generic-tool-27",
            "link": "/其他/generic-tool-27"
          },
          {
            "text": "generic-tool-220",
            "link": "/其他/generic-tool-220"
          },
          {
            "text": "generic-tool-179",
            "link": "/其他/generic-tool-179"
          },
          {
            "text": "generic-tool-201",
            "link": "/其他/generic-tool-201"
          },
          {
            "text": "generic-tool-13",
            "link": "/其他/generic-tool-13"
          },
          {
            "text": "generic-tool-327",
            "link": "/其他/generic-tool-327"
          },
          {
            "text": "generic-tool-2",
            "link": "/其他/generic-tool-2"
          },
          {
            "text": "php",
            "link": "/其他/php"
          },
          {
            "text": "generic-tool-345",
            "link": "/其他/generic-tool-345"
          },
          {
            "text": "generic-tool-257",
            "link": "/其他/generic-tool-257"
          },
          {
            "text": "generic-tool-17",
            "link": "/其他/generic-tool-17"
          },
          {
            "text": "generic-tool-189",
            "link": "/其他/generic-tool-189"
          },
          {
            "text": "generic-tool-367",
            "link": "/其他/generic-tool-367"
          },
          {
            "text": "generic-tool-89",
            "link": "/其他/generic-tool-89"
          },
          {
            "text": "generic-tool-58",
            "link": "/其他/generic-tool-58"
          },
          {
            "text": "generic-tool-63",
            "link": "/其他/generic-tool-63"
          },
          {
            "text": "generic-tool-145",
            "link": "/其他/generic-tool-145"
          },
          {
            "text": "generic-tool-54",
            "link": "/其他/generic-tool-54"
          },
          {
            "text": "generic-tool-81",
            "link": "/其他/generic-tool-81"
          },
          {
            "text": "generic-tool-358",
            "link": "/其他/generic-tool-358"
          },
          {
            "text": "generic-tool-241",
            "link": "/其他/generic-tool-241"
          },
          {
            "text": "generic-tool-130",
            "link": "/其他/generic-tool-130"
          },
          {
            "text": "cmake",
            "link": "/其他/cmake"
          },
          {
            "text": "generic-tool-103",
            "link": "/其他/generic-tool-103"
          },
          {
            "text": "generic-tool-188",
            "link": "/其他/generic-tool-188"
          },
          {
            "text": "clojure",
            "link": "/其他/clojure"
          },
          {
            "text": "generic-tool-55",
            "link": "/其他/generic-tool-55"
          },
          {
            "text": "generic-tool-342",
            "link": "/其他/generic-tool-342"
          },
          {
            "text": "generic-tool-378",
            "link": "/其他/generic-tool-378"
          },
          {
            "text": "generic-tool-222",
            "link": "/其他/generic-tool-222"
          },
          {
            "text": "generic-tool-124",
            "link": "/其他/generic-tool-124"
          },
          {
            "text": "generic-tool-37",
            "link": "/其他/generic-tool-37"
          },
          {
            "text": "generic-tool-261",
            "link": "/其他/generic-tool-261"
          },
          {
            "text": "generic-tool-303",
            "link": "/其他/generic-tool-303"
          },
          {
            "text": "lua",
            "link": "/其他/lua"
          },
          {
            "text": "generic-tool-243",
            "link": "/其他/generic-tool-243"
          },
          {
            "text": "generic-tool-236",
            "link": "/其他/generic-tool-236"
          },
          {
            "text": "generic-tool-235",
            "link": "/其他/generic-tool-235"
          },
          {
            "text": "generic-tool-180",
            "link": "/其他/generic-tool-180"
          },
          {
            "text": "generic-tool-211",
            "link": "/其他/generic-tool-211"
          },
          {
            "text": "generic-tool-137",
            "link": "/其他/generic-tool-137"
          },
          {
            "text": "generic-tool-85",
            "link": "/其他/generic-tool-85"
          },
          {
            "text": "generic-tool-355",
            "link": "/其他/generic-tool-355"
          },
          {
            "text": "generic-tool-365",
            "link": "/其他/generic-tool-365"
          },
          {
            "text": "generic-tool-70",
            "link": "/其他/generic-tool-70"
          },
          {
            "text": "wget",
            "link": "/其他/wget"
          },
          {
            "text": "generic-tool-120",
            "link": "/其他/generic-tool-120"
          },
          {
            "text": "generic-tool-57",
            "link": "/其他/generic-tool-57"
          },
          {
            "text": "generic-tool-8",
            "link": "/其他/generic-tool-8"
          },
          {
            "text": "generic-tool-231",
            "link": "/其他/generic-tool-231"
          },
          {
            "text": "generic-tool-248",
            "link": "/其他/generic-tool-248"
          },
          {
            "text": "generic-tool-219",
            "link": "/其他/generic-tool-219"
          },
          {
            "text": "generic-tool-370",
            "link": "/其他/generic-tool-370"
          },
          {
            "text": "generic-tool-258",
            "link": "/其他/generic-tool-258"
          },
          {
            "text": "generic-tool-371",
            "link": "/其他/generic-tool-371"
          },
          {
            "text": "generic-tool-162",
            "link": "/其他/generic-tool-162"
          },
          {
            "text": "g++",
            "link": "/其他/g++"
          },
          {
            "text": "nodejs",
            "link": "/其他/nodejs"
          },
          {
            "text": "generic-tool-172",
            "link": "/其他/generic-tool-172"
          },
          {
            "text": "generic-tool-106",
            "link": "/其他/generic-tool-106"
          },
          {
            "text": "generic-tool-141",
            "link": "/其他/generic-tool-141"
          },
          {
            "text": "generic-tool-192",
            "link": "/其他/generic-tool-192"
          },
          {
            "text": "generic-tool-204",
            "link": "/其他/generic-tool-204"
          },
          {
            "text": "generic-tool-262",
            "link": "/其他/generic-tool-262"
          },
          {
            "text": "generic-tool-334",
            "link": "/其他/generic-tool-334"
          },
          {
            "text": "generic-tool-196",
            "link": "/其他/generic-tool-196"
          },
          {
            "text": "generic-tool-24",
            "link": "/其他/generic-tool-24"
          },
          {
            "text": "generic-tool-239",
            "link": "/其他/generic-tool-239"
          },
          {
            "text": "generic-tool-108",
            "link": "/其他/generic-tool-108"
          },
          {
            "text": "generic-tool-3",
            "link": "/其他/generic-tool-3"
          },
          {
            "text": "generic-tool-379",
            "link": "/其他/generic-tool-379"
          },
          {
            "text": "gcc",
            "link": "/其他/gcc"
          },
          {
            "text": "generic-tool-194",
            "link": "/其他/generic-tool-194"
          },
          {
            "text": "generic-tool-364",
            "link": "/其他/generic-tool-364"
          },
          {
            "text": "generic-tool-341",
            "link": "/其他/generic-tool-341"
          },
          {
            "text": "generic-tool-98",
            "link": "/其他/generic-tool-98"
          },
          {
            "text": "generic-tool-287",
            "link": "/其他/generic-tool-287"
          },
          {
            "text": "generic-tool-18",
            "link": "/其他/generic-tool-18"
          },
          {
            "text": "generic-tool-0",
            "link": "/其他/generic-tool-0"
          },
          {
            "text": "generic-tool-300",
            "link": "/其他/generic-tool-300"
          },
          {
            "text": "generic-tool-245",
            "link": "/其他/generic-tool-245"
          },
          {
            "text": "generic-tool-254",
            "link": "/其他/generic-tool-254"
          },
          {
            "text": "generic-tool-267",
            "link": "/其他/generic-tool-267"
          },
          {
            "text": "generic-tool-276",
            "link": "/其他/generic-tool-276"
          },
          {
            "text": "generic-tool-372",
            "link": "/其他/generic-tool-372"
          },
          {
            "text": "generic-tool-10",
            "link": "/其他/generic-tool-10"
          },
          {
            "text": "generic-tool-15",
            "link": "/其他/generic-tool-15"
          },
          {
            "text": "generic-tool-193",
            "link": "/其他/generic-tool-193"
          },
          {
            "text": "generic-tool-302",
            "link": "/其他/generic-tool-302"
          },
          {
            "text": "generic-tool-171",
            "link": "/其他/generic-tool-171"
          },
          {
            "text": "generic-tool-109",
            "link": "/其他/generic-tool-109"
          },
          {
            "text": "generic-tool-93",
            "link": "/其他/generic-tool-93"
          },
          {
            "text": "generic-tool-343",
            "link": "/其他/generic-tool-343"
          },
          {
            "text": "generic-tool-279",
            "link": "/其他/generic-tool-279"
          },
          {
            "text": "generic-tool-351",
            "link": "/其他/generic-tool-351"
          },
          {
            "text": "generic-tool-310",
            "link": "/其他/generic-tool-310"
          },
          {
            "text": "rabbitmq",
            "link": "/其他/rabbitmq"
          },
          {
            "text": "generic-tool-306",
            "link": "/其他/generic-tool-306"
          },
          {
            "text": "generic-tool-354",
            "link": "/其他/generic-tool-354"
          },
          {
            "text": "generic-tool-154",
            "link": "/其他/generic-tool-154"
          },
          {
            "text": "generic-tool-41",
            "link": "/其他/generic-tool-41"
          },
          {
            "text": "generic-tool-252",
            "link": "/其他/generic-tool-252"
          },
          {
            "text": "generic-tool-40",
            "link": "/其他/generic-tool-40"
          },
          {
            "text": "generic-tool-200",
            "link": "/其他/generic-tool-200"
          },
          {
            "text": "generic-tool-253",
            "link": "/其他/generic-tool-253"
          },
          {
            "text": "generic-tool-206",
            "link": "/其他/generic-tool-206"
          },
          {
            "text": "generic-tool-268",
            "link": "/其他/generic-tool-268"
          },
          {
            "text": "generic-tool-316",
            "link": "/其他/generic-tool-316"
          },
          {
            "text": "generic-tool-104",
            "link": "/其他/generic-tool-104"
          },
          {
            "text": "gradle",
            "link": "/其他/gradle"
          },
          {
            "text": "generic-tool-185",
            "link": "/其他/generic-tool-185"
          },
          {
            "text": "generic-tool-48",
            "link": "/其他/generic-tool-48"
          },
          {
            "text": "generic-tool-111",
            "link": "/其他/generic-tool-111"
          },
          {
            "text": "generic-tool-76",
            "link": "/其他/generic-tool-76"
          },
          {
            "text": "generic-tool-150",
            "link": "/其他/generic-tool-150"
          },
          {
            "text": "generic-tool-14",
            "link": "/其他/generic-tool-14"
          },
          {
            "text": "curl",
            "link": "/其他/curl"
          },
          {
            "text": "generic-tool-195",
            "link": "/其他/generic-tool-195"
          },
          {
            "text": "generic-tool-309",
            "link": "/其他/generic-tool-309"
          },
          {
            "text": "generic-tool-66",
            "link": "/其他/generic-tool-66"
          },
          {
            "text": "generic-tool-288",
            "link": "/其他/generic-tool-288"
          },
          {
            "text": "generic-tool-34",
            "link": "/其他/generic-tool-34"
          },
          {
            "text": "generic-tool-292",
            "link": "/其他/generic-tool-292"
          },
          {
            "text": "generic-tool-286",
            "link": "/其他/generic-tool-286"
          },
          {
            "text": "generic-tool-263",
            "link": "/其他/generic-tool-263"
          },
          {
            "text": "generic-tool-186",
            "link": "/其他/generic-tool-186"
          },
          {
            "text": "generic-tool-331",
            "link": "/其他/generic-tool-331"
          },
          {
            "text": "generic-tool-74",
            "link": "/其他/generic-tool-74"
          },
          {
            "text": "generic-tool-295",
            "link": "/其他/generic-tool-295"
          },
          {
            "text": "generic-tool-133",
            "link": "/其他/generic-tool-133"
          },
          {
            "text": "generic-tool-205",
            "link": "/其他/generic-tool-205"
          },
          {
            "text": "generic-tool-166",
            "link": "/其他/generic-tool-166"
          },
          {
            "text": "generic-tool-68",
            "link": "/其他/generic-tool-68"
          },
          {
            "text": "generic-tool-377",
            "link": "/其他/generic-tool-377"
          },
          {
            "text": "generic-tool-49",
            "link": "/其他/generic-tool-49"
          },
          {
            "text": "generic-tool-25",
            "link": "/其他/generic-tool-25"
          },
          {
            "text": "generic-tool-169",
            "link": "/其他/generic-tool-169"
          },
          {
            "text": "generic-tool-217",
            "link": "/其他/generic-tool-217"
          },
          {
            "text": "generic-tool-227",
            "link": "/其他/generic-tool-227"
          },
          {
            "text": "generic-tool-214",
            "link": "/其他/generic-tool-214"
          },
          {
            "text": "generic-tool-369",
            "link": "/其他/generic-tool-369"
          },
          {
            "text": "generic-tool-1",
            "link": "/其他/generic-tool-1"
          },
          {
            "text": "generic-tool-247",
            "link": "/其他/generic-tool-247"
          },
          {
            "text": "generic-tool-265",
            "link": "/其他/generic-tool-265"
          },
          {
            "text": "generic-tool-16",
            "link": "/其他/generic-tool-16"
          },
          {
            "text": "generic-tool-125",
            "link": "/其他/generic-tool-125"
          },
          {
            "text": "generic-tool-353",
            "link": "/其他/generic-tool-353"
          },
          {
            "text": "generic-tool-181",
            "link": "/其他/generic-tool-181"
          },
          {
            "text": "generic-tool-102",
            "link": "/其他/generic-tool-102"
          },
          {
            "text": "generic-tool-132",
            "link": "/其他/generic-tool-132"
          },
          {
            "text": "generic-tool-242",
            "link": "/其他/generic-tool-242"
          },
          {
            "text": "bazel",
            "link": "/其他/bazel"
          },
          {
            "text": "generic-tool-129",
            "link": "/其他/generic-tool-129"
          },
          {
            "text": "generic-tool-314",
            "link": "/其他/generic-tool-314"
          },
          {
            "text": "generic-tool-317",
            "link": "/其他/generic-tool-317"
          },
          {
            "text": "generic-tool-299",
            "link": "/其他/generic-tool-299"
          },
          {
            "text": "generic-tool-282",
            "link": "/其他/generic-tool-282"
          },
          {
            "text": "generic-tool-291",
            "link": "/其他/generic-tool-291"
          },
          {
            "text": "generic-tool-285",
            "link": "/其他/generic-tool-285"
          },
          {
            "text": "generic-tool-62",
            "link": "/其他/generic-tool-62"
          },
          {
            "text": "generic-tool-352",
            "link": "/其他/generic-tool-352"
          },
          {
            "text": "generic-tool-6",
            "link": "/其他/generic-tool-6"
          },
          {
            "text": "generic-tool-122",
            "link": "/其他/generic-tool-122"
          },
          {
            "text": "generic-tool-174",
            "link": "/其他/generic-tool-174"
          },
          {
            "text": "generic-tool-296",
            "link": "/其他/generic-tool-296"
          },
          {
            "text": "generic-tool-182",
            "link": "/其他/generic-tool-182"
          },
          {
            "text": "generic-tool-190",
            "link": "/其他/generic-tool-190"
          },
          {
            "text": "scala",
            "link": "/其他/scala"
          },
          {
            "text": "generic-tool-347",
            "link": "/其他/generic-tool-347"
          },
          {
            "text": "generic-tool-118",
            "link": "/其他/generic-tool-118"
          },
          {
            "text": "generic-tool-32",
            "link": "/其他/generic-tool-32"
          },
          {
            "text": "generic-tool-142",
            "link": "/其他/generic-tool-142"
          },
          {
            "text": "generic-tool-138",
            "link": "/其他/generic-tool-138"
          },
          {
            "text": "maven",
            "link": "/其他/maven"
          },
          {
            "text": "generic-tool-324",
            "link": "/其他/generic-tool-324"
          },
          {
            "text": "generic-tool-156",
            "link": "/其他/generic-tool-156"
          },
          {
            "text": "generic-tool-230",
            "link": "/其他/generic-tool-230"
          },
          {
            "text": "generic-tool-325",
            "link": "/其他/generic-tool-325"
          },
          {
            "text": "generic-tool-191",
            "link": "/其他/generic-tool-191"
          },
          {
            "text": "generic-tool-69",
            "link": "/其他/generic-tool-69"
          },
          {
            "text": "generic-tool-82",
            "link": "/其他/generic-tool-82"
          },
          {
            "text": "generic-tool-91",
            "link": "/其他/generic-tool-91"
          },
          {
            "text": "generic-tool-184",
            "link": "/其他/generic-tool-184"
          },
          {
            "text": "generic-tool-274",
            "link": "/其他/generic-tool-274"
          },
          {
            "text": "generic-tool-315",
            "link": "/其他/generic-tool-315"
          },
          {
            "text": "generic-tool-126",
            "link": "/其他/generic-tool-126"
          },
          {
            "text": "generic-tool-165",
            "link": "/其他/generic-tool-165"
          },
          {
            "text": "generic-tool-50",
            "link": "/其他/generic-tool-50"
          },
          {
            "text": "generic-tool-105",
            "link": "/其他/generic-tool-105"
          },
          {
            "text": "generic-tool-374",
            "link": "/其他/generic-tool-374"
          },
          {
            "text": "generic-tool-42",
            "link": "/其他/generic-tool-42"
          },
          {
            "text": "generic-tool-237",
            "link": "/其他/generic-tool-237"
          },
          {
            "text": "generic-tool-278",
            "link": "/其他/generic-tool-278"
          },
          {
            "text": "generic-tool-250",
            "link": "/其他/generic-tool-250"
          },
          {
            "text": "jq",
            "link": "/其他/jq"
          },
          {
            "text": "generic-tool-249",
            "link": "/其他/generic-tool-249"
          },
          {
            "text": "generic-tool-234",
            "link": "/其他/generic-tool-234"
          },
          {
            "text": "generic-tool-228",
            "link": "/其他/generic-tool-228"
          },
          {
            "text": "generic-tool-77",
            "link": "/其他/generic-tool-77"
          },
          {
            "text": "deno",
            "link": "/其他/deno"
          },
          {
            "text": "generic-tool-30",
            "link": "/其他/generic-tool-30"
          },
          {
            "text": "generic-tool-208",
            "link": "/其他/generic-tool-208"
          },
          {
            "text": "generic-tool-160",
            "link": "/其他/generic-tool-160"
          },
          {
            "text": "generic-tool-101",
            "link": "/其他/generic-tool-101"
          },
          {
            "text": "generic-tool-229",
            "link": "/其他/generic-tool-229"
          },
          {
            "text": "generic-tool-44",
            "link": "/其他/generic-tool-44"
          },
          {
            "text": "generic-tool-155",
            "link": "/其他/generic-tool-155"
          },
          {
            "text": "generic-tool-173",
            "link": "/其他/generic-tool-173"
          },
          {
            "text": "generic-tool-176",
            "link": "/其他/generic-tool-176"
          },
          {
            "text": "generic-tool-199",
            "link": "/其他/generic-tool-199"
          },
          {
            "text": "generic-tool-152",
            "link": "/其他/generic-tool-152"
          },
          {
            "text": "generic-tool-121",
            "link": "/其他/generic-tool-121"
          },
          {
            "text": "generic-tool-168",
            "link": "/其他/generic-tool-168"
          },
          {
            "text": "generic-tool-183",
            "link": "/其他/generic-tool-183"
          },
          {
            "text": "generic-tool-43",
            "link": "/其他/generic-tool-43"
          },
          {
            "text": "generic-tool-33",
            "link": "/其他/generic-tool-33"
          },
          {
            "text": "generic-tool-350",
            "link": "/其他/generic-tool-350"
          },
          {
            "text": "generic-tool-9",
            "link": "/其他/generic-tool-9"
          },
          {
            "text": "generic-tool-153",
            "link": "/其他/generic-tool-153"
          },
          {
            "text": "generic-tool-340",
            "link": "/其他/generic-tool-340"
          },
          {
            "text": "generic-tool-308",
            "link": "/其他/generic-tool-308"
          },
          {
            "text": "generic-tool-90",
            "link": "/其他/generic-tool-90"
          },
          {
            "text": "generic-tool-144",
            "link": "/其他/generic-tool-144"
          },
          {
            "text": "generic-tool-348",
            "link": "/其他/generic-tool-348"
          },
          {
            "text": "clang",
            "link": "/其他/clang"
          },
          {
            "text": "generic-tool-329",
            "link": "/其他/generic-tool-329"
          },
          {
            "text": "generic-tool-131",
            "link": "/其他/generic-tool-131"
          },
          {
            "text": "generic-tool-215",
            "link": "/其他/generic-tool-215"
          },
          {
            "text": "java",
            "link": "/其他/java"
          },
          {
            "text": "generic-tool-202",
            "link": "/其他/generic-tool-202"
          },
          {
            "text": "generic-tool-373",
            "link": "/其他/generic-tool-373"
          },
          {
            "text": "generic-tool-75",
            "link": "/其他/generic-tool-75"
          },
          {
            "text": "generic-tool-260",
            "link": "/其他/generic-tool-260"
          },
          {
            "text": "generic-tool-294",
            "link": "/其他/generic-tool-294"
          },
          {
            "text": "generic-tool-19",
            "link": "/其他/generic-tool-19"
          },
          {
            "text": "generic-tool-119",
            "link": "/其他/generic-tool-119"
          },
          {
            "text": "generic-tool-73",
            "link": "/其他/generic-tool-73"
          },
          {
            "text": "ffmpeg",
            "link": "/其他/ffmpeg"
          },
          {
            "text": "yq",
            "link": "/其他/yq"
          },
          {
            "text": "generic-tool-362",
            "link": "/其他/generic-tool-362"
          },
          {
            "text": "generic-tool-240",
            "link": "/其他/generic-tool-240"
          },
          {
            "text": "generic-tool-4",
            "link": "/其他/generic-tool-4"
          },
          {
            "text": "generic-tool-117",
            "link": "/其他/generic-tool-117"
          },
          {
            "text": "generic-tool-175",
            "link": "/其他/generic-tool-175"
          },
          {
            "text": "perl",
            "link": "/其他/perl"
          },
          {
            "text": "generic-tool-7",
            "link": "/其他/generic-tool-7"
          },
          {
            "text": "generic-tool-221",
            "link": "/其他/generic-tool-221"
          },
          {
            "text": "generic-tool-23",
            "link": "/其他/generic-tool-23"
          },
          {
            "text": "generic-tool-151",
            "link": "/其他/generic-tool-151"
          },
          {
            "text": "generic-tool-264",
            "link": "/其他/generic-tool-264"
          },
          {
            "text": "generic-tool-47",
            "link": "/其他/generic-tool-47"
          },
          {
            "text": "generic-tool-246",
            "link": "/其他/generic-tool-246"
          },
          {
            "text": "generic-tool-368",
            "link": "/其他/generic-tool-368"
          }
        ],
        "collapsed": false
      },
      {
        "text": "数据库",
        "items": [
          {
            "text": "opentsdb",
            "link": "/数据库/opentsdb"
          },
          {
            "text": "memcached",
            "link": "/数据库/memcached"
          },
          {
            "text": "etcd",
            "link": "/数据库/etcd"
          },
          {
            "text": "aerospike",
            "link": "/数据库/aerospike"
          },
          {
            "text": "solr",
            "link": "/数据库/solr"
          },
          {
            "text": "consul",
            "link": "/数据库/consul"
          },
          {
            "text": "neo4j",
            "link": "/数据库/neo4j"
          },
          {
            "text": "mongodb",
            "link": "/数据库/mongodb"
          },
          {
            "text": "tidb",
            "link": "/数据库/tidb"
          },
          {
            "text": "voltdb",
            "link": "/数据库/voltdb"
          },
          {
            "text": "cockroachdb",
            "link": "/数据库/cockroachdb"
          },
          {
            "text": "ravendb",
            "link": "/数据库/ravendb"
          },
          {
            "text": "hbase",
            "link": "/数据库/hbase"
          },
          {
            "text": "zookeeper",
            "link": "/数据库/zookeeper"
          },
          {
            "text": "sphinx",
            "link": "/数据库/sphinx"
          },
          {
            "text": "sqlite",
            "link": "/数据库/sqlite"
          },
          {
            "text": "clickhouse",
            "link": "/数据库/clickhouse"
          },
          {
            "text": "couchdb",
            "link": "/数据库/couchdb"
          },
          {
            "text": "riak",
            "link": "/数据库/riak"
          },
          {
            "text": "elasticsearch",
            "link": "/数据库/elasticsearch"
          },
          {
            "text": "mysql",
            "link": "/数据库/mysql"
          },
          {
            "text": "influxdb",
            "link": "/数据库/influxdb"
          },
          {
            "text": "rethinkdb",
            "link": "/数据库/rethinkdb"
          },
          {
            "text": "postgresql",
            "link": "/数据库/postgresql"
          },
          {
            "text": "mariadb",
            "link": "/数据库/mariadb"
          },
          {
            "text": "redis",
            "link": "/数据库/redis"
          },
          {
            "text": "cassandra",
            "link": "/数据库/cassandra"
          }
        ],
        "collapsed": false
      }
    ],
    "nav": [
      {
        "text": "Home",
        "link": "/"
      },
      {
        "text": "GitHub",
        "link": "https://github.com/clawopt/ops-scripts"
      }
    ]
  }
})
