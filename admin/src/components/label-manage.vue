<template>
  <div class="table_wrapper">
    <div class="table_wrapper_inner">
      <div class="container">
        <div class="container_table">
          <div class="table_body">
            <table>
              <colgroup style="width: 322px;">
                <col style="width: 200px; min-width: 200px;">
                <col style="width: 600px; min-width: 600px;">
                <col style="width: 200px; min-width: 200px;">
                <col>
              </colgroup>
              <thead class="table_thead">
                <tr>
                  <th>
                    <span>名称</span>
                  </th>
                  <th>
                    <span>描述</span>
                  </th>
                  <th>
                    <span>更新日期</span>
                  </th>
                  <th>
                    <span>编辑</span>
                  </th>
                </tr>
              </thead>
              <tbody class="table_tbody">
                <tr class="table_row" v-for="(item,index) in labelList" :key="index">
                  <td style="padding: 8px;">
                    <!-- <a href="javascript:void(0)">{{item.name}}</a> -->
                    <el-input class="label_input" v-model="item.name" style="line-height: 30px;" maxlength="15"></el-input>
                  </td>
                  <td style="padding: 8px;">
                    <el-input
                        class="label_input"
                        type="textarea"
                        autosize
                        maxlength="50"
                        placeholder="请输入描述"
                        v-model="item.description">
                    </el-input>
                  </td>
                  <td style="padding: 8px;">
                    <span>{{formatDate(item.update_at, '-')}}</span>
                  </td>
                  <td style="padding: 8px;">
                    <span>
                      <a href="javascript:void(0)" @click="updateLabel(item._id, item.name, item.description)">保存</a>
                      <div class="divider divider_vertical"></div>
                      <a href="javascript:void(0)" @click="deleteLabel(item._id)">删除</a>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getLabels, updateLabelById, delLabelById } from '../api';

export default {
  data () {
    return {
      labelList: []
    }
  },
  created () {
    this.initLabelList()
  },
  methods: {
    initLabelList () {
      const loading = this.$loading();
      getLabels().then(data => {
        if (data.code === 0) {
          this.labelList = data.result || [];
        } else {
          this.alertErrMsg(data.msg);
        }
        loading.close();
      }).catch(err => {
        console.error(err);
        this.alertErrMsg(err);
        loading.close();
      });
    },
    updateLabel (id, name, desc) {
        if (id && this.validate(name, desc)) {
            const loading = this.$loading();
            updateLabelById(id, { name, description: desc }).then(data => {
                if (data.code === 0) {
                    this.showToastSuccess('保存成功')
                } else {
                    this.alertErrMsg(data.msg || data.error.message);
                }
                loading.close();
            }).catch(err => {
                console.error(err);
                this.alertErrMsg(err);
                loading.close();
            });
        }
    },
    validate (name, desc) {
      if (!name) {
        this.alertWarnMsg('请输入标签名称')
        return false
      }
      if (!desc) {
        this.alertWarnMsg('请输入标签描述')
        return false
      }
      return true
    },
    deleteLabel (_id) {
      this.confirmMsg('确定删除吗？', () => {
        _id && delLabelById(_id).then(data => {
          if (data.code === 0) {
            this.showToastSuccess('删除成功')
            this.initLabelList()
          } else {
            this.alertErrMsg(data.msg);
          }
        }).catch(err => {
          console.error(err);
          this.alertErrMsg(err);
        });
      })
    }
  }
}
</script>
<style slot-scope>
.label_input .el-input__inner {
    height: 34px;
    border: none;
}
.label_input .el-textarea__inner {
    border: none;
}
</style>
